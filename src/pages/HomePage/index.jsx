import { useContext } from "react";
import { Header } from "../../components/structures/Header";
import { NewsList } from "../../components/structures/NewsList";
import { Welcome } from "../../components/structures/Welcome";
import { UserContext } from "../../providers/UserContext";

export const HomePage = () => {
   const { user } = useContext(UserContext);
   return (
      <div>
         <Header />
         {user ? <NewsList /> : <Welcome />}
      </div>
   );
};
