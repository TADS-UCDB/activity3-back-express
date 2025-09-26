import express from "express";
const server = express();
const port = 3000;

server.use(express.urlencoded());
server.use(express.json());


server.get('/', (_, res)=>{
    res.json({
        message: "Welcome to my API"
    })
})

server.get('/autor', (_, res)=>{
    res.json({
        autor: "Pedro",
        version: "1.0.0",
    })
})

server.listen(port, () =>{
    console.log(`Running at http://localhost:${port}`)
})