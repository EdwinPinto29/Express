import  express  from "express";
import 'dotenv/config';



const app = express();

app.use(express.json());

app.get('/sumar/:n1/:n2',(req,res)=>{
    res.send(parseInt(req.params.n1)+parseInt(req.params.n2));
});

// app.get('/ejemplo/:nombre',(req,res)=>{
//     res.send(req.params.nombre+" "+"Es un gusanero hp");
// })

app.get('/ejemplo',(req,res)=>{
    res.set('saludo', 'Hola desde Express');
    res.send(req.headers.nombre);
});

app.get('/adicion',(req,res)=>{
    const datos = req.body;
    res.send({
        ct: req.headers['content-type'], nombre:`${datos.nombre}   ${datos.apellido}`,
    });
});

// app.get('/ejemplo',(req,res)=>{
//     res.send(parseInt(req.headers.n1)+parseInt(req.headers.n2));
// });



app.listen({
    port: process.env.APP_PORT, }, () => {
        console.log(`Server running on ${process.env.APP_HOSTNAME}:${process.env.APP_PORT}`);
    });