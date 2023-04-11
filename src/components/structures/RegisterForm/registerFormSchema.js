import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().min(3, "Nome é obrigatório e precisa conter pelo menos 3 caracteres"),
    email: z.string().min(1, "O e-mail é obrigatório").email("Forneça um e-mail válido."),
    password: z.string().min(8, "A senha precisa conter no mínimo 8 caracteres"),
    job: z.string().min(1, "Selecione um trabalho")
})