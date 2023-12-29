import Fastify from "fastify";

const fastify = Fastify({ 
    logger: {
        transport: {
            target: "pino-pretty",
            options: {
                translateTime: 'HH:MM:ss Z',
                ignore: "pid,hostname"
            }
        }
    } 
});

export default fastify;
