import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import CreditCard from "./Components/CreditCard";
import CardList from "./Components/CardList";
import CenteredButton from "./Components/CenteredButton";
import "./Views/App.scss";

const App = () => (
  <div className="App">
    <Navbar />
    <Hero />

    <CreditCard />
  </div>
);

export default App;
