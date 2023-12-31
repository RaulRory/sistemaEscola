import { ClassRepository } from "../../repository/classRepository.js";
export class ListClass {
    constructor(readonly classRepository: ClassRepository) {
        this.classRepository = classRepository;
    }
    async execute() {
        const classes = await this.classRepository.listAll();
        return classes;
    }
}