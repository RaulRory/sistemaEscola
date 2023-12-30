import { Parents } from "../../domain/parents.js";
import { Student } from "../../domain/students.js";

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
    listAll(): unknown[];
}