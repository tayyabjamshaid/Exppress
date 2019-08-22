const express=require('express');
const app=express();
app.set('views','/public');
app.set('view engine','twig');
app.use(express.static(__dirname+'/public'));
app.get('/',(req,res)=>{
    res.send('tayaybn');
})
app.get('/t',(req,res)=>{
    res.render(__dirname+'/layout.twig');
})
app.listen(3008,()=>console.log("tayab"));