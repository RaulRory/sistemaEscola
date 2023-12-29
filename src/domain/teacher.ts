export class Teacher {

    readonly name: string;
    readonly surname: string;
    readonly cpf: string;
    readonly telephone: string;
    readonly email: string;
    readonly hiringDate: Date;
    readonly wage: number;
    readonly specialization?: string;

    constructor(name: string, surname: string, cpf: string, telephone: string, email: string, hiringDate: Date, wage: number, specialization: string = '') {
        this.name = name;
        this.surname = surname;
        this.cpf = cpf;
        this.telephone = telephone;
        this.email = email;
        this.hiringDate = hiringDate;
        this.wage = wage;
        this.specialization = specialization;
    }

}