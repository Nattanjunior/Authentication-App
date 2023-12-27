const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
const mongosee = require('mongoose');
const { default: mongoose } = require('mongoose');
require('dotenv').config()
app.use(cors())
app.use(express.json())
mongosee.connect(process.env.MONGODB_URI);
const CreateData = new mongosee.Schema({
    email: String,
    password: String
});
const EditionData = new mongosee.Schema({
    nameEdit:String, 
    BioEdit: String,
    phoneEdit:String,
    emailEdit: String,
    passwordEdit:String,
})
let Data = mongosee.model("data", CreateData);
let Edition = mongoose.model("edit", EditionData) 
app.get('/',  (req,res)=>{
    return res.send('hello world')
});
app.post('/Register', async (req,res)=>{
    try{
        const {emailRegister,passwordRegister} = req.body;
        const Register = new Data({
            email:emailRegister,
            password:passwordRegister,
        })
        const saveUser = await Register.save()
        return res.json({message:"Usuário salvo com sucesso!!",data:saveUser})
    }
    catch(erro){
        console.error('Cadastro não realizado, preencha os dados corretamente!')
    }
})
app.post('/Feed', async (req,res)=>{
    try{
        const {emailLogin,passwordLogin} = req.body
        const NewData = new Data({
        email:emailLogin,
        password:passwordLogin
    });
        const search = await Data.findOne({email:emailLogin, password:passwordLogin});
        if(!search){
            return res.json({message:'Usuário não encontrado'})
        }
        return res.json({message:'Login efetuado com sucesso!!', data:NewData})
    }
    catch(erro){
        return res.status(401).json({message: "Erro ao fazer login!!"})
    }
});
app.post('/Feed/editprofile', async (req, res)=>{
    try {
        const {nameEdit,bioEdit,phoneEdit,emailEdit,passwordEdit} = req.body;
        const editionProfile = new Edition({
        nameEdit:nameEdit,
        bioEdit:bioEdit,
        phoneEdit:phoneEdit,
        emailEdit:emailEdit,
        passwordEdit:passwordEdit
    });
        const saveProfile = await editionProfile.save()
        console.log(saveProfile)
    } catch (error) {
        return res.json({message:"Erro ao salvar os novos dados do usuário!!! "})
    }
})
app.listen(port,()=>{
    console.log(`servidor aberto na porta ${port}`);
});

