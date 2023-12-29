import fastify from "../src/infra/api";

describe("Testing API server", () => {
    let _server = fastify;

    beforeEach(async () => {
        await _server.listen();
    });

    afterEach(async () => {
        await _server.close();
    });

    it("is server running", async () => {
        expect(_server).toBeTruthy();
    });
});
