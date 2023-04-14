import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const UserContext = createContext({});

// gerenciador global
export const UserProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   // useQuery

   //Colhe a token do localStorage recupera o usuário através de requisição
   useEffect(() => {
      //Ter uma rota de api adequada para isso!
      const token = localStorage.getItem("@TOKEN");

      //NÃO USEM LOCALSTORAGE - UTILIZEM REQUISIÇÃO COM TOKEN!!!
      if(token){
         const user = localStorage.getItem("@USER"); //Substituir por uma requisição segura mais
         setUser(JSON.parse(user));      
         //A requisição deveria acontecer
      }
   }, [])

   //O usuário acessa a página de login e fornece email e senha
   const userLogin = async (formData, setLoading, callback) => {
      try {
         setLoading(true);
         const { data } = await api.post("/login", formData);
         localStorage.setItem("@TOKEN", data.accessToken);
         localStorage.setItem("@USER", JSON.stringify(data.user));
         setUser(data.user);
         if (callback) {
            await callback(data);
         }
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   const userRegister = async (formData, setLoading, callback) => {
      try {
         setLoading(true);
         await api.post("/users", formData);
         console.log("Cadastro realizado com sucesso!");
         if (callback) {
            await callback();
         }
      } catch (error) {
         console.log(error);
      } finally {
         setLoading(false);
      }
   };

   const userLogout = () => {
      setUser(null);
      localStorage.removeItem("@TOKEN");
   };

   return (
      <UserContext.Provider value={{ user, userLogin, userRegister, userLogout }}>
         {children}
      </UserContext.Provider>
   );
};
