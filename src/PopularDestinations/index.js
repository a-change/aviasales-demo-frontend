import React from "react";
import compass from "./compass.svg";
import edit from "./edit.svg";

import {
  PopularDestinations,
  Title,
  Text,
  ChosenCity,
  Destinations
} from "./styles";
import Option from "./option";
import Destination from "./destination";
import { options, destinations } from "./options";

export default function() {
  return (
    <PopularDestinations>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 col-md-offset-1">
            <div className="row center-xs">
              <div className="col-xs-12 col-md-8">
                <img alt="Популярные направления" src={compass} />
                <Title>
                  <Text>
                    Популярные направления перелетов из города{" "}
                    <ChosenCity>
                      Москва <img alt="Изменить город" src={edit} />
                    </ChosenCity>
                  </Text>
                </Title>
              </div>
            </div>
            <div className="row center-xs">
              <div className="col-xs-4 col-md-2 col-xl-1 ">
                <Option option={options.anywhere} isActive />
              </div>
              <div className="col-xs-4 col-md-2 col-xl-1">
                <Option option={options.sun} />
              </div>
              <div className="col-xs-4 col-md-2 col-xl-1">
                <Option option={options.shopping} />
              </div>
              <div className="col-xs-4 col-md-2 col-xl-1">
                <Option option={options.culture} />
              </div>
              <div className="col-xs-4 col-md-2 col-xl-1">
                <Option option={options.nightLife} />
              </div>
              <div className="col-xs-4 col-md-2 col-xl-1">
                <Option option={options.withKids} />
              </div>
            </div>
            <Destinations>
              <div className="row center-md">
                <div className="col-xs-12 col-md-12 col-xl-6">
                  <Destination
                    destination={destinations.krasnodar}
                    popularDestinations
                  />
                </div>
                <div className="col-xs-12 col-md-12 col-xl-6">
                  <Destination destination={destinations.sochi} />
                </div>
                <div className="col-xs-12 col-md-12 col-xl-6">
                  <Destination destination={destinations.piter} />
                </div>
                <div className="col-xs-12 col-md-12 col-xl-6">
                  <Destination destination={destinations.minVody} />
                </div>
                <div className="col-xs-12 col-md-12 col-xl-6">
                  <Destination destination={destinations.simferopol} />
                </div>
                <div className="col-xs-12 col-md-12 col-xl-6">
                  <Destination destination={destinations.barcelona} />
                </div>
              </div>
            </Destinations>
          </div>
        </div>
      </div>
    </PopularDestinations>
  );
}
