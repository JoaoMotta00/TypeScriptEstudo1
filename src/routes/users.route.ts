import express from "express";

import { celebrate,Segments } from "celebrate";
import { userGetBySchema, userSchema } from "../models/users.model";
import { UsersController } from "../controllers/users.controller";

export const userRoutes = express.Router();

userRoutes.get("/users", UsersController.getAll);

userRoutes.get("/users/:id",celebrate({[Segments.PARAMS]: userGetBySchema}), UsersController.getById);

userRoutes.delete("/users/:id", UsersController.deleteById);

userRoutes.put("/users/:id",celebrate({[Segments.PARAMS]: userGetBySchema, [Segments.BODY]: userSchema}), UsersController.putById);

userRoutes.post("/users", celebrate({[Segments.BODY]: userSchema}), UsersController.post);

