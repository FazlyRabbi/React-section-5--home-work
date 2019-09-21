import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componets/header';
import Content from "./componets/content";
import Sidebar from "./componets/sidebar";
import Footer from "./componets/footer";

const App = () => {
  return (
    <>
      <Header contentText={"header"}></Header>
      <Content contentText={"content"}></Content>
      <Sidebar contentText={"sidebar"}></Sidebar>
      <Footer contentText={"footer"}></Footer>
    </>
  );
};

ReactDOM.render(<App></App>,document.querySelector(".container"));
