import { Request, Response } from "express";

type User = {
        id: number;
        nome: string;
        email: string;};

let id = 0;
let usuarios: User[] = [];

export class UsersController{

    static getAll(req: Request, res: Response){
        res.send(usuarios);
    }

    static getById(req: Request, res: Response){
        let userId = Number(req.params.id);
        res.send(usuarios.find(user => user.id === userId));
    }

    static deleteById(req: Request, res: Response){
        let userId = Number(req.params.id);
        let indice = usuarios.findIndex((user) => user.id === userId);
        if(indice !== -1){
            usuarios.splice(indice, 1);
        }
        res.send({
            message: "Usuário de id " + userId + " removido com sucesso"
        });
    }

    static putById(req: Request, res: Response){
        let userId = Number(req.params.id);
        let indice = usuarios.findIndex((user) => user.id === userId);
        if(indice !== -1){
            usuarios[indice] = req.body;
            usuarios[indice].id = userId;
        }
        res.send({
            message: "Usuário alterado com sucesso"
        });
    }

    static post(req:Request, res: Response){
        let user = req.body;
        usuarios.push(user);
        user.id = ++id;
        res.send({
            message: "Usuário criado com sucesso"
        });
    }



}