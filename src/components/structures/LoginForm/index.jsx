import { Input } from "../../fragments/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { api } from "../../../services/api";
import { useState } from "react";

export const LoginForm = ({ setUser, setIsLoginOpen }) => {
   const [loading, setLoading] = useState(false);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(loginFormSchema),
   });

   const userLogin = async (formData) => {
      try {
         setLoading(true);
         const { data } = await api.post("/login", formData);
         localStorage.setItem("@TOKEN", data.acessToken);
         setUser(data.user);
         setIsLoginOpen(false);
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   const submit = (formData) => {
      userLogin(formData);
   };

   return (
      <form onSubmit={handleSubmit(submit)}>
         <Input
            type="email"
            placeholder="Seu e-mail"
            register={register("email")}
            error={errors.email}
         />
         <Input
            type="password"
            placeholder="Sua senha"
            register={register("password")}
            error={errors.password}
         />
         <button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Entrar"}
         </button>
      </form>
   );
};
