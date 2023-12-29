import { TeacherRepository } from "../../repository/teacherRepository";

export class ListTeacher {
    constructor(readonly teacherRepository: TeacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    async execute() {
        const teachers = await this.teacherRepository.listAll();
        return teachers;
    }
}