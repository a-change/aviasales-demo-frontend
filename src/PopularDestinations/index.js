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
              <div className="col-xs-12 col-md-11 col-xl-9">
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
            <div className="row center-xs center-xl">
              <div className="col-xl-8">
                <div class="row">
                  {Object.keys(options).map(function(option, index) {
                    let isActive = false;
                    if (index === 0) {
                      isActive = true;
                    }
                    return (
                      <div className="col-xs-4 col-md-2 col-xl-2" key={index}>
                        <Option option={options[option]} isActive={isActive} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <Destinations>
              <div className="row center-md">
                {Object.keys(destinations).map(function(destination, index) {
                  if (
                    destinations[destination].categories.indexOf(
                      "popularDestinations"
                    ) === -1
                  ) {
                    return null;
                  }
                  return (
                    <div className="col-xs-12 col-md-12 col-xl-6" key={index}>
                      <Destination
                        destination={destinations[destination]}
                        popularDestinations
                      />
                    </div>
                  );
                })}
              </div>
            </Destinations>
          </div>
        </div>
      </div>
    </PopularDestinations>
  );
}
