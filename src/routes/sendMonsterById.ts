import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { Monstro } from "@prisma/client";
import axios from "axios";


async function fetchDataMonsters(id: number) {
    const res = await axios.get('https://ragnapi.com/api/v1/re-newal/monsters/1268');
    const data = res.data
    console.log(data)
    return data
}


export async function sendMonsterById(app: FastifyInstance) {
    app.post('/api/monsters', async (req, res) => {

        const data: any = req.body;

        if (Object.keys(data).length === 0) {
            res.code(400).send({ error: 'Ops!! Não é possível criar um monstro com um objeto vazio.' })
            console.log('O objeto está vazio. Não será criado no banco de dados.');
            return; // Sai da função sem criar o objeto
        }

        const hasMonster = await prisma.monstro.findFirst({
            where: {
                monster_id: data.monster_id
            }
        });

        if (hasMonster) {
            res.code(400).send({ error: 'Ops!! Um monstro com o mesmo id já existe no banco de dados.' })
            console.log('Já existe um monstro com o mesmo monster_id no banco de dados. O monstro não será criado.');
            return; // Sai da função sem criar o objeto
        }

        try {
        
            const { _id, ...dataWithoutID} = data

            console.log(dataWithoutID)
            const newMonster = await prisma.monstro.create({
                data: dataWithoutID

            });
            res.code(201).send(newMonster);
            console.log('Monstro criado com sucesso:', newMonster.monster_info);
        } catch (error) {
            console.error('Erro ao criar monstro:', error);
            res.code(500).send({ error: 'Erro ao criar monstro' });
        }
    });
}