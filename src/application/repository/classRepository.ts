import { Class } from "../../domain/class.js";

export interface DataClassProps {
    nameTeacher: string;
    studentList?: string[];
}

export interface ClassRepository {
    create (dataClass: DataClassProps): Class;
    listAll (): unknown[];
}