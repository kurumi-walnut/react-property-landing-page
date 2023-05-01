import React from "react";
import Header from "./components/Header/header.jsx"
import Hero from "./components/Hero/hero.jsx";
import Company from "./components/Company/company.jsx";
import Residence from "./components/Residence/residence.jsx";
import Value from "./components/Value/value.jsx";
import Contact from "./components/Contact/contact.jsx";
import "./app.css"
import GetStarted from "./components/GetStarted/getStarted.jsx";
import Footer from "./components/Footer/footer.jsx";

function App() {
  return (
    <div className="App">
        <div>
            <div className={"white-gradient"}/>
            <Header/>
            <Hero/>
        </div>
        <Company/>
        <Residence/>
        <Value/>
        <Contact/>
        <GetStarted/>
        <Footer />
    </div>
  );
}

export default App;
