import { DataTeacherProps, TeacherRepository } from "../../application/repository/teacherRepository";
import { Teacher } from "../../domain/teacher";
import { Database } from "../database/database";

export class TeacherDatabase implements TeacherRepository{
    #database;
    constructor(database: Database) {
        this.#database = database;
    }
    async create(dataTeacher: DataTeacherProps): Promise<Teacher> {
        const { name, surname, cpf, telephones, emails, hiringDate, wage, specialization } = dataTeacher;
        const newTeacher = new Teacher(name, surname, cpf, telephones, emails, hiringDate, wage, specialization);
        this.#database.update(newTeacher);
        return newTeacher;
    }
}