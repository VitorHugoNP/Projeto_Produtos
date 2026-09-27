import {z} from "zod";

export const createUserSchema = z.object({
    body: z.object({
        name: z.string({message: "O nome precisa ser um texto"}).min(3, {message: "O nome precisa ter no minimo 3 letras"}),
        email: z.email({message: "Formato do email invalido"}),
        password: z.string({message: "Senha obrigatoria" }).min(6, {message: "a senha precisa de pelo menos 6 letras"}),
    }),
});