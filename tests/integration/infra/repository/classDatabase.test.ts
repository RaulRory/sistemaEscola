import { Database } from "../../../../src/infra/database/database";
import { ClassDatabase } from "../../../../src/infra/repository/classDatabase";

describe("ClassDatabase", () => {
    it("should create a new class", async () => {
        const db = new Database();
        const classDatabase = new ClassDatabase(db);
        const dataClass = {
            nameTeacher: "Jose",
            studentList: ["Aluno Teste 1", "Aluno Teste 2"]
        };

        const expected = await classDatabase.create(dataClass);
        expect(expected).toHaveProperty("idClass");
        expect(expected.nameTeacher).toBe("Jose");
    });

});