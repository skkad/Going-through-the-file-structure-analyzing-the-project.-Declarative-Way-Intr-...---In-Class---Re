import { render } from "enzyme";
import React, {Component, useState} from "react";
import '../styles/App.css';



function Project(){
  return(
    <div>
    <h1 data-ns-test="project-name">Clone of an E-commerce site</h1>
    <p data-ns-test="project-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro delectus ex quaerat esse maxime qui, obcaecati a quam et quis sapiente rem impedit inventore voluptas omnis quod eum repellendus cupiditate.</p>
    </div>
  );
}
const App = () => {
  return (
    <div id="main">
          <Project></Project>
    </div>
  )
}


export default App;
