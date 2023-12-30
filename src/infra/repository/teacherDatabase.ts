import { DataTeacherProps, TeacherRepository } from "../../application/repository/teacherRepository.js";
import { Teacher } from "../../domain/teacher.js";
import { Database } from "../database/database.js";

export class TeacherDatabase implements TeacherRepository{
    #database;
    constructor(database: Database) {
        this.#database = database;
    }

    listAll() {
        const teachers = this.#database.list();
        return teachers;
    }

    async create(dataTeacher: DataTeacherProps): Promise<Teacher> {
        const { name, surname, cpf, telephones, emails, hiringDate, wage, specialization } = dataTeacher;
        const newTeacher = new Teacher(name, surname, cpf, telephones, emails, hiringDate, wage, specialization);
        this.#database.update(newTeacher);
        return newTeacher;
    }
}