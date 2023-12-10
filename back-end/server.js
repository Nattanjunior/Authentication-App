const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())

app.get('/', (req,res)=>{
    return res.send('hello world')
})


app.listen(port,()=>{
    console.log(`servidor aberto na porta ${port}`);
});

