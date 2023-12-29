export class Class {

    readonly idClass: string;
    readonly nameTeacher: string;
    readonly studentList: string[];
    
    constructor(nameTeacher: string, studentList: string[]) {
        this.idClass = this.#generateId();
        this.nameTeacher = nameTeacher;
        this.studentList = studentList;
    }

    #generateId() {
        const alphabet = 'abcdefgh';
        const shifts = 'mtn';
        const numberClass = Math.random() * (9 - 1) + 1;
        const letterClass = alphabet[Math.floor(Math.random() * alphabet.length)];
        const shiftClass = shifts[Math.floor(Math.random() * shifts.length)];

        return `${numberClass}${letterClass.toLocaleUpperCase()}-${shiftClass.toLocaleUpperCase()}`;
    }
}