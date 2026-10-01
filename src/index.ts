import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Bem vindo ao meu primeiro site de Node.JS");
});

type User = {
        id: number;
        nome: string;
        email: string;};

let id = 0;
let usuarios: User[] = [];

app.get("/users", (req: Request, res: Response) => {
     res.send(usuarios);
});

app.get("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id);
    res.send(usuarios.find(user => user.id === userId));
});

app.delete("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id);
    let indice = usuarios.findIndex((user) => user.id === userId);
    if(indice !== -1){
        usuarios.splice(indice, 1);
    }
    res.send({
        message: "Usuário de id " + userId + " removido com sucesso"
    });
});

app.put("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id);
    let indice = usuarios.findIndex((user) => user.id === userId);
    if(indice !== -1){
        usuarios[indice] = req.body;
        usuarios[indice].id = userId;
    }
    res.send({
        message: "Usuário alterado com sucesso"
    });
});

app.post("/users", (req: Request, res: Response) =>{
    let user = req.body;
    usuarios.push(user);
    user.id = ++id;
    res.send({
        message: "Usuário criado com sucesso"
    })
});

app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000");
});