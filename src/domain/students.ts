import { Parents } from "./parents.js";

export class Student {
    
    readonly name: string;
    readonly surname: string;
    readonly dateOfBirth: Date;
    readonly responsible: Parents;
    readonly typeBlood: string;
    readonly registrationDate: Date;
    readonly allergies?: string[];
    readonly medications?: string[];
    readonly documents?: string;

    constructor(name: string, surname: string, dateOfBirth: Date, responsible: Parents, typeBlood: string, registrationDate: Date, allergies: string[] = [], medications: string[] = [], documents: string = '') {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.responsible = responsible;
        this.typeBlood = typeBlood;
        this.registrationDate = registrationDate;
        this.allergies = allergies;
        this.medications = medications;
        this.documents = documents;
    }

}