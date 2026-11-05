import { Joi } from "celebrate";

export type User = {
    id: string;
    nome: string;
    email: string;
};

export const userSchema = Joi.object().keys({
    nome: Joi.string().required(),
    email: Joi.string().email().required()
});

export const userGetBySchema = Joi.object({
    id: Joi.string().alphanum().length(20).required()
});