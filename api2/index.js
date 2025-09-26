const express = require("express");
const server = express();
const port = 3000;

let products = [{
    name: "Banana",
    price: 123,
    desc: "blabla"
}]

server.get("/", (_,res)=>{
    res.send("Alive");
})

server.get("/products", (_, res)=>{
    res.json(products);
})

server.get("/products/add", (req, res)=>{
    const {name, price, desc} = req.query;

    products.push({
        name: name,
        price: price,
        desc: desc
    })
    res.send("Successfuly add to products");
})

server.listen(port, ()=>{
    console.log(`Runnig at ${port}`);
})