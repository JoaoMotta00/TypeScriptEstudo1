"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Bem vindo ao meu primeiro site de Node.JS");
});
let id = 0;
let usuarios = [];
app.get("/users", (req, res) => {
    res.send(usuarios);
});
app.get("/users/:id", (req, res) => {
    let userId = Number(req.params.id);
    res.send(usuarios.find(user => user.id === userId));
});
app.post("/users", (req, res) => {
    let user = req.body;
    usuarios.push(user);
    user.id = ++id;
    res.send({
        message: "Usuário criado com sucesso"
    });
});
app.listen(3000, () => {
    console.log("Servidor ativo na porta 3000");
});
//# sourceMappingURL=index.js.map