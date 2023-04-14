import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../providers/UserContext";
import { LoginForm } from "../LoginForm";
import styles from "./style.module.css";

export const Header = () => {
   const { user, userLogout } = useContext(UserContext);
   const [isLoginOpen, setIsLoginOpen] = useState(false);

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
                  <div className={styles.overlay}>
                     <div role="dialog" className={styles.modalBox}>
                        <button onClick={() => setIsLoginOpen(false)}>Fechar</button>
                        <LoginForm setIsLoginOpen={setIsLoginOpen} />
                     </div>
                  </div>
               ) : null}
            </div>
         )}
      </header>
   );
};
