import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Bem vindo ao meu primeiro site de Node.JS");
});

let id = 0;
let usuarios: {id: number, nome: string, email: string}[] = [];

app.get("/users", (req: Request, res: Response) => {
     res.send(usuarios);
});

app.get("/users/:id", (req: Request, res: Response) => {
    let userId = Number(req.params.id);
    res.send(usuarios.find(user => user.id === userId));
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