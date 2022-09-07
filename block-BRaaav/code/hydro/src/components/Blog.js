import React from "react";
import Article from "./Article";

function Blog() {
  return (
    <section className="blog padding">
      <div className="container">
        <header className="sec-header text-center">
          <h2 className="heading">Our Blog</h2>
          <div className="dot-wrapper">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </header>
        <div className="flex wrap">
          <Article
            date="December 22, 2017"
            title="How to find beautiful workspace?"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          />
          <Article
            date="December 18, 2017"
            title="Woman sportwear"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          />
          <Article
            date="December 14, 2017"
            title="New creative fashion"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          />
          <Article
            date=" December 10, 2017"
            title="Minimalist design trend in 2018"
            description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;
