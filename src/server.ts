import fastify from "./infra/api";

const start = async () => {
    try {
        await fastify.listen({ port: 3000 });
    } catch (error) {
        fastify.log.error(error);
        process.exit(1)
    }
}

start();