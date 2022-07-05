import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Article from "./Article";
import { getArticles } from "./articleSlice";

const Articles = () => {

    const dispatch = useDispatch();
    const articles = useSelector(state => state.articles.articles);

    useEffect(() => {
        dispatch(getArticles("webdev"))
    }, [,])

    return (
        <section id="articles">
            {
                articles && articles.map((article, index) => <Article article={article.data} key={index}/>)
            }
        </section>
    )
}

export default Articles;