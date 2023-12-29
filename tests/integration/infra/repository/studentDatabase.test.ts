import { Database } from "../../../../src/infra/database/database";
import { StudentDatabase } from "../../../../src/infra/repository/studentDatabase";

describe("StudentDatabase", () => {
    it("Should create a student", async () => {
        const db = new Database();
        const student = new StudentDatabase(db);
        const expected = await student.create({
            name: "John",
            surname: "Doe",
            birthDate: new Date("1999-01-01"),
            responsible: [{
                name: "John",
                surname: "Doe",
                cpf: "000.000.000-00",
                address: {
                    street: "Rua 1",
                    number: 123,
                    zipCode: "00000-000"
                },
                telephones: ["(00) 00000-0000"],
            }],
            registrationDate: new Date("2021-01-01"),
        });

        expect(expected.responsible).toBeInstanceOf(Array);
        expect(expected.name).toBe("John");
    });
});