import React, { Component } from "react";
import Header from "./Header/";
import PopularDestinations from "./PopularDestinations/";
import BestPrices from "./BestPrices/";
import AirCompanies from "./AirCompanies";
import SubscriptionForm from "./SubscriptionForm";
import SpecialOffers from "./SpecialOffers";
import Help from "./Help";
import MobileApp from "./MobileApp";
import Footer from "./Footer";
import "flexboxgrid2";
import "normalize.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <PopularDestinations />
        <BestPrices />
        <AirCompanies />
        <SubscriptionForm />
        <SpecialOffers />
        <Help />
        <MobileApp />
        <Footer />
      </div>
    );
  }
}

export default App;
