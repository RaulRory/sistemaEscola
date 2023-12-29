import { Teacher } from "../../domain/teacher";

export interface DataTeacherProps {
    name: string;
    surname: string;
    cpf: string;
    telephones: string;
    emails: string;
    hiringDate: Date;
    wage: number;
    specialization?: string;
}


export interface TeacherRepository {
    create(dataTeacher: DataTeacherProps): Promise<Teacher>;
    listAll(): Promise<Teacher[]>;
}