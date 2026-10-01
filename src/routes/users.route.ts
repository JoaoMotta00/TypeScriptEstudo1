import express from "express";
import { UsersController } from "../controller/users.controller";

export const userRoutes = express.Router();

userRoutes.get("/users", UsersController.getAll);

userRoutes.get("/users/:id", UsersController.getById);

userRoutes.delete("/users/:id", UsersController.deleteById);

userRoutes.put("/users/:id", UsersController.putById);

userRoutes.post("/users", UsersController.post);

