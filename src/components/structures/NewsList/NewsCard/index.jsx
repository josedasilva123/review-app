import { useContext } from "react"
import { NewsContext } from "../../../../providers/NewsContext"

export const NewsCard = ({currentNew}) => {
    const { removeNews } = useContext(NewsContext);
    return(
        <li>
            <h3>{currentNew.title}</h3>
            <p>{currentNew.category}</p>
            <p>{currentNew.author}</p>
            <button onClick={() => removeNews(currentNew.id)}>Excluir</button>
        </li>
    )
}