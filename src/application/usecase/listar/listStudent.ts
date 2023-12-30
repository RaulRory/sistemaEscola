import { StudentRepository } from "../../repository/studentRepository.js";

export class ListStudent {
    constructor(readonly studentRepository: StudentRepository) {
        this.studentRepository = studentRepository;
    }
    async execute() {
        const students = await this.studentRepository.listAll();
        return students;
    }
}