import React from "react";
import "./assets/styles/global.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Destaques from "./components/Destaques";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <>
      <Header />
      <main id="content">
        <Home />
        <Destaques />
        <SearchBar />
      </main>
    </>
  );
};

export default App;
