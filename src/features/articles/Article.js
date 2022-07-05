const Article = ({article}) => {

    return(
       <article>
            <h3>{article.title}</h3>
            <a className="redditLink" href={"https://www.reddit.com" + article.permalink} target="_blank"><div className="to-reddit"></div></a>
            <p className="expand-text">Open</p>
       </article>
    )
}

export default Article;