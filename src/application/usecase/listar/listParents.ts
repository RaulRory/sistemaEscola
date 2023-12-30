import { ParentsRepository } from "../../repository/parentsRepository.js";

export class ListParents {
    constructor(readonly parentsRepository: ParentsRepository) {
        this.parentsRepository = parentsRepository;
    }
    async execute() {
        const parents = await this.parentsRepository.listAll();
        return parents;
    }
}