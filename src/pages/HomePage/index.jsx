import { useState } from "react";
import { LoginForm } from "../../components/structures/LoginForm";

export const HomePage = ({ user, setUser }) => {
   const [isLoginOpen, setIsLoginOpen] = useState(false);

   const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
   }

   return (
      <div>
         <header>
            {user ? (
               <div>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <button onClick={() => userLogout()}>Sair</button>
               </div>
            ) : (
               <div>
                  <button onClick={() => setIsLoginOpen(true)}>Entrar</button>
                  {isLoginOpen ? (
                     <div>
                        <button onClick={() => setIsLoginOpen(false)}>Fechar</button>
                        <LoginForm setUser={setUser} setIsLoginOpen={setIsLoginOpen} />
                     </div>
                  ) : null}
               </div>
            )}
         </header>
      </div>
   );
};
