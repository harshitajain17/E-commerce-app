import React from "react";
import Products from './Products'

const Home = () => {
  return (
    <div className="home">
      <div class="card text-bg-dark text-white border-0">
        <img src="/bg.jpg" class="card-img" alt="Background" height='550px'/>
        <div class="card-img-overlay justify-content-center">
        <div className="container">
        <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
        <p class="card-text lead fs-2">
            CHECK OUT ALL THE TRENDS
        </p>
        </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
