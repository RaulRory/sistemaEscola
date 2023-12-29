import { Database } from "../../../../src/infra/database/database";
import { ParentsDatabase } from "../../../../src/infra/repository/parentsDatabase";

describe("ParentsDatabase", () => {
    it("Should create a parent", async () => {
        const db = new Database();
        const parents = new ParentsDatabase(db);
        const expected = await parents.create({
            name: "John",
            surname: "Doe",
            cpf: "000.000.000-00",
            address: {
                street: "Rua 1",
                number: 123,
                zipCode: "00000-000"
            },
            telephones: ["(00) 00000-0000"],
        });

        expect(expected.name).toBe("John");
        expect(expected.cpf).toBe("000.000.000-00");
    });
});