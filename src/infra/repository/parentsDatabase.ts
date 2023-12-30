import { DataParentsProps, ParentsRepository } from "../../application/repository/parentsRepository.js";
import { Parents } from "../../domain/parents.js";
import { Database } from "../database/database.js";

export class ParentsDatabase implements ParentsRepository {
    #database: Database;

    constructor(database: Database) {
        this.#database = database;
    }

    listAll() {
        const parents = this.#database.list();
        return parents;
    }

    async create(dataParents: DataParentsProps): Promise<Parents> {
        const { name, surname, cpf, address, telephones, emails } = dataParents;
        const newParents = new Parents(name, surname, cpf, address, telephones, emails);
        this.#database.update(newParents);
        return newParents;
    }
}