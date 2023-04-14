import { createContext, useContext, useState } from "react";
import { api } from "../services/api";

export const NewsContext = createContext({});

//O provider é um componente 
export const NewsProvider = ({children}) => {
    const [newsList, setNewsList] = useState([]);
 
    // uma requisição vai atualizar o banco de dados, mas para atualizarmos a interface precisamos atualizar estados

    const addNews = async (formData) => {
        const token = localStorage.getItem("@TOKEN");
        try {
            //Atualizar o banco de dados (back-end)
            const {data} = await api.post('/news', formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            //Atualizar o front-end
            setNewsList([...newsList, data]);
        } catch (error) {
            console.log(error);
        }
    }

    const removeNews = async (newId) => {
        const token = localStorage.getItem("@TOKEN");
        try {
            //Atualizei meu back-end
            await api.delete(`/news/${newId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            //Atualizar o front-end
            const newNewsList = newsList.filter(currentNew => currentNew.id !== newId);
            setNewsList(newNewsList); 
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <NewsContext.Provider value={{newsList, setNewsList, addNews, removeNews}}>
            {children}
        </NewsContext.Provider>
    )
}