import { useState } from "react";
import { Header } from "../../components/structures/Header";
import { LoginForm } from "../../components/structures/LoginForm";

export const HomePage = ({ user, setUser }) => {
   const [isLoginOpen, setIsLoginOpen] = useState(false);

   return (
      <div>
         <Header
            user={user}
            setUser={setUser}
            isLoginOpen={isLoginOpen}
            setIsLoginOpen={setIsLoginOpen}
         />
      </div>
   );
};
