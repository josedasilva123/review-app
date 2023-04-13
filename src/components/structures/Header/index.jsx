import { Link } from "react-router-dom";
import { LoginForm } from "../LoginForm";

export const Header = ({ user, setUser, isLoginOpen, setIsLoginOpen }) => {
   const userLogout = () => {
      setUser(null);
      localStorage.removeItem("@TOKEN");
   };

   return (
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
               <Link to="/register">Cadastrar-se</Link>
               {isLoginOpen ? (
                  <div>
                     <button onClick={() => setIsLoginOpen(false)}>Fechar</button>
                     <LoginForm setUser={setUser} setIsLoginOpen={setIsLoginOpen} />
                  </div>
               ) : null}
            </div>
         )}
      </header>
   );
};
