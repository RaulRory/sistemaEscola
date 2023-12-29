import { DataStudentProps, StudentRepository } from "../../application/repository/studentRepository";
import { Student } from "../../domain/students";
import { Database } from "../database/database";

export class StudentDatabase implements StudentRepository {
    #database;
    constructor(database: Database) {
        this.#database = database;
    }
    async create(dataStudent: DataStudentProps): Promise<Student> {
        const { name, surname, birthDate, responsible, typeBlood = '', registrationDate, allergies, medications, documents } = dataStudent;
        const newStudent = new Student(name, surname, birthDate, responsible[0], typeBlood, registrationDate, allergies, medications, documents);
        this.#database.update(newStudent);
        return newStudent;
    }
}