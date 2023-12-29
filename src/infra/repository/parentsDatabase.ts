import { DataParentsProps, ParentsRepository } from "../../application/repository/parentsRepository";
import { Parents } from "../../domain/parents";
import { Database } from "../database/database";

export class ParentsDatabase implements ParentsRepository {
    #database: Database;

    constructor(database: Database) {
        this.#database = database;
    }

    async create(dataParents: DataParentsProps): Promise<Parents> {
        const { name, surname, cpf, address, telephones, emails } = dataParents;
        const newParents = new Parents(name, surname, cpf, address, telephones, emails);
        this.#database.update(newParents);
        return newParents;
    }
}