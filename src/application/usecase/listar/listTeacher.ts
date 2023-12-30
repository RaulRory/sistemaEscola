import { TeacherRepository } from "../../repository/teacherRepository.js";

export class ListTeacher {
    constructor(readonly teacherRepository: TeacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    async execute() {
        const teachers = await this.teacherRepository.listAll();
        return teachers;
    }
}