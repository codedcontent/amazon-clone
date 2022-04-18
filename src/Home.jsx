import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
          className="home__image"
        />

        <div className="home__row">
          <Product
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price="29.99"
            img="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            alt="The lean startup"
            rating={5}
          />
          <Product
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price="29.99"
            img="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            alt="The lean startup"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="The lean startup"
            price="29.99"
            img="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            alt="The lean startup"
            rating={5}
          />
          <Product
            title="The lean startup"
            price="29.99"
            img="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            alt="The lean startup"
            rating={5}
          />
          <Product
            title="The lean startup"
            price="29.99"
            img="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            alt="The lean startup"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price="29.99"
            img="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            alt="The lean startup"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
