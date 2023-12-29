import { Address } from "../application/repository/parentsRepository";

export class Parents {
    
    name: string;
    surname: string;
    cpf: string;
    address: Address;
    telephones?: string[];
    emails?: string[];

    constructor(name: string, surname: string, cpf: string, address: Address, telephones: string[] = [], emails: string[] = []) {
        this.name = name;
        this.surname = surname;
        this.cpf = cpf;
        this.address = address;
        this.telephones = telephones;
        this.emails = emails;
    }
}