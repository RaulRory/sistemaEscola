import { existsSync, readFileSync, writeFileSync } from  "node:fs";
import { resolve } from "node:path";

export class Database {
    readonly path: string;
    #DB: Map<unknown, unknown> = new Map();

    constructor(path: string = "db.json") {
        this.path = resolve(__dirname, path); // TDOD: check constructor new URL
        this.#initialize();
    }


    #initialize() {
        if(existsSync(this.path)) {
            const dataFile = readFileSync(this.path, { encoding: "utf-8" });
            const data: [unknown, unknown][] = (JSON.parse(dataFile) as Array<[unknown, unknown]>)
            .map(([id, dataObj]) => [id, dataObj]);
            this.#DB = new Map(Array.from(data));
            return;
        }

        this.#updateFile();
    }

    #updateFile() {
        writeFileSync(this.path, JSON.stringify(Array.from([...this.#DB])));
    }

    update(data: unknown) {
        let id: unknown;
        
        if(typeof data === "object" && data !== null && "idClass" in data) {
           id = data["idClass"]; 
        }

        if(typeof data === "object" && data !== null && "name" in data) {
            id = data["name"]; 
        }
        
        if(typeof data === "object" && data !== null && "cpf" in data) {
            id = data["cpf"]; 
        }

        this.#DB.set(id, data);
        this.#updateFile();
        return this;
    }

    find(id: unknown) {
        return this.#DB.get(id);
    }

    list() {
        return Array.from(this.#DB.values());
    }

    remove(id: unknown) {
        this.#DB.delete(id);
        this.#updateFile();
    }

}
