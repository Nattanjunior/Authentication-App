const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const mongosee = require('mongoose');
require('dotenv').config()
app.use(cors())
app.use(express.json())
mongosee.connect(process.env.MONGODB_URI);
const CreateData = new mongosee.Schema({
    email: String,
    password: String
});

let Data = mongosee.model("data", CreateData);

app.get('/',  (req,res)=>{
    return res.send('hello world')
});

app.post('/Login', async (req,res)=>{
    try{
        const {emailLogin,passwordLogin} = req.body
        const NewData = new Data({
        email:emailLogin,
        passwor:passwordLogin
    });
        Data.find({email:emailLogin, password:passwordLogin},(error,data)=>{
            if(error) return console.error('Usuário não encontrado')
            console.log(data)
        })
    }
    catch(erro){

    }
})

app.listen(port,()=>{
    console.log(`servidor aberto na porta ${port}`);
});

