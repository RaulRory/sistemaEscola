import { Class } from "../../domain/class";

export interface DataClassProps {
    nameTeacher: string;
    studentList?: string[];
}

export interface ClassRepository {
    create (dataClass: DataClassProps): Promise<Class>;
    listAll (): Promise<Class[]>;
}