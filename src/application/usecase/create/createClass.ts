import { ClassRepository, DataClassProps } from "../../repository/classRepository";

export class CreateClass {
    constructor(readonly classRepository: ClassRepository) {}
    
    async execute(dataClass: Input ) {
        const classCreated = await this.classRepository.create(dataClass);
        return classCreated;
    }
}

interface Input extends DataClassProps {}