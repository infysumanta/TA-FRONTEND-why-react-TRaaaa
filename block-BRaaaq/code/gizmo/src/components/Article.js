import React from "react";
import PropTypes from "prop-types";

function Article(props) {
  return (
    <div className="card">
      <article>
        <div>
          <img className="full-width" src={props.urlToImage} alt="" />
        </div>
        <div>
          <h2>{props.title}</h2>
          <p>{props.description.substr(0, 100) + "...."}</p>
        </div>
        <div>
          <span>
            <i class="far fa-clock"></i> 6 minutes ago
          </span>
          <span>
            <i class="fas fa-comments"></i> 39 comments
          </span>
          <cite>~{props.author}</cite>
        </div>
      </article>
    </div>
  );
}

Article.prototype = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Article;
