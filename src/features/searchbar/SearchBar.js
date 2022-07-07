import { useDispatch, useSelector } from "react-redux";
import { getArticles, changeSubreddit } from "../articles/articleSlice";


const SearchBar = () => {

    const dispatch = useDispatch();
    let subreddit = useSelector((state) => state.articles.subreddit);
    console.log(subreddit);

    const handleChange = (e) => {
        dispatch(changeSubreddit(e.target.value));
        dispatch(getArticles(e.target.value.replace(/\s/g,'')));
    }

    return (
            <form id="searchform" onSubmit={(e) => e.preventDefault()}>
                <label id="searchLabel" htmlFor="search">search: </label>
                <input type="text" id="search" value={subreddit} onChange={handleChange}/>
            </form>
    )
}

export default SearchBar;