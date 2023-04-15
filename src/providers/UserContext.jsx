import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const UserContext = createContext({});

// gerenciador global
export const UserProvider = ({ children }) => {
   const [user, setUser] = useState(null);

   useEffect(() => {
      //Ter uma rota de api adequada para isso!
      const token = localStorage.getItem("@TOKEN");
      const userId = localStorage.getItem("@USERID");

      const userAutoLogin = async () => {
         try {
            const {data} = await api.get(`/users/${userId}`, {
               headers: {
                  Authorization: `Bearer ${token}`
               }
            })
            setUser(data);
         } catch (error) {
            console.log(error);
            localStorage.removeItem("@TOKEN");
            localStorage.removeItem("@USERID");
         }
      }

      if(token && userId){
         userAutoLogin();
      }
   }, [])

   //O usuário acessa a página de login e fornece email e senha
   const userLogin = async (formData, setLoading, callback) => {
      try {
         setLoading(true);
         const { data } = await api.post("/login", formData);
         localStorage.setItem("@TOKEN", data.accessToken);
         localStorage.setItem("@USERID", data.user.id);
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
