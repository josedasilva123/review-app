import { Input } from "../../fragments/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "./loginFormSchema";
import { api } from "../../../services/api";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext";

export const LoginForm = ({ setIsLoginOpen }) => {
   const [loading, setLoading] = useState(false);
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(loginFormSchema),
   });

   const { userLogin } = useContext(UserContext);
  
   const submit = (formData) => {
      userLogin(formData, setLoading, () => {
         setIsLoginOpen(false);
      });
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
