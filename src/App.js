import React from "react";
import "./App.css";
import Hero from "../src/component/hero/Hero";
import Programs from "./component/program/Programs";
import Reasons from "./component/reasons/Reasons";
import Plans from "./component/plans/Plans";
import Testimonial from "./component/testimonial/Testimonial";
import Join from "./component/join/Join";
import Footer from "./component/footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
};

export default App;
