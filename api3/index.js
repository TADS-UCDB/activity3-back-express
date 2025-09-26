import express from "express"
const server = express();
const port = 3000;

let contacts = [
    { id: 1, name: "Ana", phone: "1111-1111" },
    { id: 2, name: "Bruno", phone: "2222-2222" },
    { id: 3, name: "Carla", phone: "3333-3333" },
    { id: 4, name: "Carlos", phone: "4444-4444" }
];


server.get("/", (_, res) => {
    res.send("Alive:)");
})

server.get("/contacts", (req, res) => {
    const { name } = req.query;
    if (name) {
        const filtereds = contacts.filter(c =>
            c.name.toLowerCase().includes(name.toLowerCase())
        )
        res.json(filtereds)
    } else{
        res.send(contacts)
    }

})

server.listen(port, () => {
    console.log(`Runnig at ${port}`);
})