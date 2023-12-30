import { DataTeacherProps, TeacherRepository } from "../../repository/teacherRepository.js";

export class CreateTeacher {
    constructor(readonly teacherRepository: TeacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    async execute(dataTeacher: Input) {
        const teacherCreated = await this.teacherRepository.create(dataTeacher);
        return teacherCreated;
    }
}


interface Input extends DataTeacherProps {}