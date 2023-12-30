import { DataStudentProps, StudentRepository } from "../../application/repository/studentRepository.js";
import { Student } from "../../domain/students.js";
import { Database } from "../database/database.js";

export class StudentDatabase implements StudentRepository {
    #database;
    constructor(database: Database) {
        this.#database = database;
    }

    listAll() {
        const students = this.#database.list();
        return students;
    }
    async create(dataStudent: DataStudentProps): Promise<Student> {
        const { name, surname, birthDate, responsible, typeBlood = '', registrationDate, allergies, medications, documents } = dataStudent;
        const newStudent = new Student(name, surname, birthDate, responsible[0], typeBlood, registrationDate, allergies, medications, documents);
        this.#database.update(newStudent);
        return newStudent;
    }
}