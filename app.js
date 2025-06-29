import express from 'express'

const app = express()
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('Bem vindo ao meu server!')
})

app.post('/usuarios', async (req, res)=>{
    const { email, name, age} = req.body

    if(!email || !name || !age){
       return res.status(400).json('você precisa inserir os dados.')
    }else{
       return res.status(201).json('Usário criado com sucesso!')
    }

})

app.get('/usuario', (req, res)=>{
    res.json()
})

app.listen(8080, ()=>{
    console.log('servidor rodando na porta 8080');
    
})
