import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import Article from "./Article";
import ArticleList from "./ArticleList";
import About from "./About";
import logo from "../assets/logo";


console.log(blogData);

function App() {
  return (
    <div className="App">
      <About  about="About this blog"
              image ={logo}/>
      <Header name="underreacted"/>
      <Article title={"Components 101"}
               date={"December 15, 2020"}
               preview={"Setting up the building blocks of your site"}/>
      <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
