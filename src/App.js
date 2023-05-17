import React from "react";
import {
  About,
  Testimonials,
  Work,
  Header,
  Footer,
  Skills,
} from "./containers";
import { Navbar } from "./components";
import "./App.scss";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonials /> */}
      <Footer />
    </div>
  );
};

export default App;
