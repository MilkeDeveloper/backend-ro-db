import fastify from "fastify";
import {  getAllMonstersHandler } from "./routes/getAllMonsters";
import { sendMonsterById } from "./routes/sendMonsterById";
import cors from '@fastify/cors'
import { getPaginatedMonsters } from "./routes/getPaginatedMonsters";

const app = fastify();


app.register(sendMonsterById)
app.register(getAllMonstersHandler)
app.register(getPaginatedMonsters)
app.register( cors , {
    origin: '*'

})

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 5400
}).then(() => {
    console.log("HTTP Server running...");
})