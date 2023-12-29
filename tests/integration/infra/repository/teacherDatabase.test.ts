import { Database } from "../../../../src/infra/database/database";
import { TeacherDatabase } from "../../../../src/infra/repository/teacherDatabase";

describe('TeacherRepository', () => {
    it('should create a new teacher', async () => {
        const db = new Database();
        const teacher = new TeacherDatabase(db);
        const dataTeacher = {
            name: 'Jose',
            surname: 'Silva',
            cpf: '000.000.000-00',
            telephones: ['(00) 00000-0000'],
            emails: ['test@io.com.br'],
            wage: 1000,
            hiringDate: new Date('2021-01-01'),
            specialization: 'Test',
        };
        const formatData = {...dataTeacher, telephones: dataTeacher.telephones[0], emails: dataTeacher.emails[0] }
        const expected = await teacher.create(formatData);
        expect(expected).toHaveProperty('idTeacher');
        expect(expected.name).toBe('Jose');
    });
});