import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getPaginatedMonsters(app: FastifyInstance) {
    app.get('/api/monsters', async (req, res) => {
        try {
            const monsters_data = await prisma.monstro.findMany()

            const sortedMonsters = monsters_data.sort((a, b) => {
                return a.monster_id - b.monster_id
            })

            const { page = 1, pageSize = 10 }: any = req.query;
            const startIndex = (page - 1) * pageSize;
            const endIndex = startIndex + parseInt(pageSize);
            const paginatedMonsters = sortedMonsters.slice(startIndex, endIndex);
            console.log('Monstros recuperados com sucesso: ', monsters_data);
            return res.send(paginatedMonsters);
            
        } catch (error) {
            // Capturar o erro e enviá-lo na resposta
            console.error('Erro ao recuperar monstros:', error);
            res.code(500).send({ error: 'Internal Server Error', message: error });
        }
    });
}