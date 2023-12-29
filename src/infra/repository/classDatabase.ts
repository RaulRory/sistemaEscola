import { ClassRepository, DataClassProps } from "../../application/repository/classRepository";
import { Class } from "../../domain/class";
import { Database } from "../database/database";

export class ClassDatabase implements ClassRepository {
    #database: Database;

    constructor(db: Database) {
        this.#database = db;
    }

    async create(dataClass: DataClassProps) {
        const { nameTeacher, studentList = []} = dataClass; 
        const newClass = new Class(nameTeacher, studentList);
        this.#database.update(newClass);
        return newClass;
    }

    async listAll() {
        const classes = this.#database.list();
        return classes;
    }
}
