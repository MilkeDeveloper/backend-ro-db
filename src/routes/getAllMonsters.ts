
import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";


export async function getAllMonstersHandler(app: FastifyInstance) {
    app.get('/api/all/monsters', async (req, res) => {
        try {
            const monsters_data = await prisma.monstro.findMany()

            const sortedMonsters = monsters_data.sort((a, b) => {
                return a.monster_id - b.monster_id      
            })

            console.log('Monstros recuperados com sucesso: ', monsters_data);
            return res.send(sortedMonsters);

        } catch (error) {
            // Capturar o erro e enviá-lo na resposta
            console.error('Erro ao recuperar monstros:', error);
            res.code(500).send({ error: 'Internal Server Error', message: error });
        }
    });
}






