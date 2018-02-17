import React from "react";
import { AirCompanies, Title } from "./styles.js";
import Slider from "./slider";
export default function() {
  return (
    <AirCompanies>
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <Title>
              Дешевые авиабилеты от крупнейших авиакомпаний и агентств
            </Title>
          </div>
        </div>
        <div class="row center-md">
          <div class="col-md-10 col-xl-10">
            <Slider />
          </div>
        </div>
      </div>
    </AirCompanies>
  );
}
