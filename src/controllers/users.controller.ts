import { NextFunction, Request, Response } from "express";
import { User } from "../models/users.model";
import { UserService } from "../services/user.services";




export class UsersController {

    static async getAll(req: Request, res: Response, next: NextFunction) {

        res.send(await new UserService().getAll());

    }

    static async getById(req: Request, res: Response, next: NextFunction) {
        let userId = req.params.id as string;
        res.send(await new UserService().getById(userId));

    }

    static async deleteById(req: Request, res: Response, next: NextFunction) {
        let userId = req.params.id as string;
        res.send(await new UserService().deleteById(userId))
        res.status(204).end();


    }

    static async putById(req: Request, res: Response, next: NextFunction) {
        let userId = req.params.id as string;
        let user = req.body as User;
        await new UserService().putById(userId, user);
        res.send({
            message: `Usuário ${userId} alterado com sucesso`
        });

    }

    static async post(req: Request, res: Response, next: NextFunction) {
        await new UserService().post(req.body);
        res.status(201).send({
            message: `Usuário criado com sucesso`
        });
    }



}