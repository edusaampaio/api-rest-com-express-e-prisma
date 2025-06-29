import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Bem vindo ao meu server!')
})

app.post('/usuarios', async (req, res)=>{
    const { email, name, age} = req.body
    if(!email || !name || !age){
        return res.status(400).json({error:'você não enviou nenhum dado!'})
    }
        try {
             const usuario = await prisma.user.create({
            data:{email, name, age}
        })
        res.status(201).json(usuario)
    } catch (error) {
        console.error(error)
        return res.status(500).json({error:'erro ao criar usuario!'})
        }
})

app.get('/usuarios', async (req, res)=>{
    const usuarios = await prisma.user.findMany()
    return res.status(200).json(usuarios)
})

app.listen(8080, ()=>{
    console.log('servidor rodando na porta 8080');
    
})
