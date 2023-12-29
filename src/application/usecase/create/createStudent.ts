import { DataStudentProps, StudentRepository } from "../../repository/studentRepository";

export class CreateStudent {
    constructor(readonly studentRepository: StudentRepository) {
        this.studentRepository = studentRepository;
    }
    async execute(dataStudent: Input) {
        const studentCreated = await this.studentRepository.create(dataStudent);
        return studentCreated;
    }
}

export interface Input extends DataStudentProps {}