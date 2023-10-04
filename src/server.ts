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
    port: 5700
}).then(() => {
    console.log("Server started on port 5700");
})