import { Parents } from "../../domain/parents";
import { Student } from "../../domain/students";

export interface DataStudentProps {
    name: string;
    surname: string;
    birthDate: Date;
    responsible: Parents[];
    typeBlood?: string;
    registrationDate: Date;
    allergies?: string[];
    medications?: string[];
    documents?: string;
}

export interface StudentRepository {
    create(dataStudent: DataStudentProps): Promise<Student>;
    listAll(): Promise<Student[]>;
}