import { ClassRepository, DataClassProps } from "../../application/repository/classRepository.js";
import { Class } from "../../domain/class.js";
import { Database } from "../database/database.js";

export class ClassDatabase implements ClassRepository {
    #database: Database;

    constructor(db: Database) {
        this.#database = db;
    }

    listAll() {
        const classes = this.#database.list();
        return classes;
    }

    create(dataClass: DataClassProps) {
        const { nameTeacher, studentList = []} = dataClass; 
        const newClass = new Class(nameTeacher, studentList);
        this.#database.update(newClass);
        return newClass;
    }
}
