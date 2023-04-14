import { useForm } from "react-hook-form"
import { Input } from "../../fragments/Input"
import { Select } from "../../fragments/Select"
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema } from "./registerFormSchema";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";

export const RegisterForm = () => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(registerFormSchema)
    });

    const { userRegister } = useContext(UserContext);

    const navigate = useNavigate();  

    const submit = (formData) => {
        userRegister(formData, setLoading, () => {
            navigate('/')
        });
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input label="Nome" placeholder="Seu nome" type="text" id="name" register={register("name")} error={errors.name} />
            <Input label="E-mail" placeholder="Seu e-mail" type="email" id="email" register={register("email")} error={errors.email} />
            <Input label="Senha" placeholder="Crie uma senha" type="password" id="password" register={register("password")} error={errors.password}/>
            <Select id="job" register={register("job")} error={errors.job}>
                <option value="">Selecione um trabalho</option>
                <option value="designer">Designer</option>
                <option value="desenvolvedor">Desenvolvedor</option> 
                <option value="desenvolvedor">Jornalista</option>                  
            </Select>
            <button type="submit" disabled={loading}>
                {loading ? "Cadastrando..." : "Cadastrar"}
            </button>
        </form>
    )
}