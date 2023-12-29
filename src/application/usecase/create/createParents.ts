import { DataParentsProps, ParentsRepository } from "../../repository/parentsRepository";

export class CreateParents {
    constructor(readonly parentsRepository: ParentsRepository) {
        this.parentsRepository = parentsRepository;
    }
    async execute(dataParents: Input) {
        const parentsCreated = await this.parentsRepository.create(dataParents);
        return parentsCreated;
    }
}

interface Input extends DataParentsProps {}

