import React from "react";
import allData from "./../data.js";
import Article from "./Article.js";
function Articles() {
  return (
    <>
      <div className="container ">
        <h1>Articles</h1>
      </div>
      <div className="container flex-2">
        {allData.map((articles) => (
          <Article key={articles.publishedAt} {...articles} />
        ))}
      </div>
    </>
  );
}

export default Articles;
