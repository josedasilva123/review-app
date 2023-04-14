import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { NewsContext } from "../../../providers/NewsContext";
import { api } from "../../../services/api";
import { NewsCard } from "./NewsCard";

export const NewsList = () => {
   const { newsList, setNewsList } = useContext(NewsContext); 
   const loadNews = async () => {
      try {
         const { data } = await api.get("/news");
         setNewsList(data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      loadNews();
   }, []);

   return (
      <section>
         <h1>Lista de notícias</h1>
         <Link to="/create">Criar novo</Link>
         <ul>
            {newsList.map(currentNew => (
                <NewsCard key={currentNew.id} currentNew={currentNew} />
            ))}
         </ul>
      </section>
   );
};
