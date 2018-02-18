import React from "react";
import calendar from "./calendar.svg";
import { BestPrices, Title, Text, Note } from "./styles";
import { BestPrice } from "./best-price";
import { destinations } from "../PopularDestinations/options";
export default function() {
  return (
    <BestPrices>
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-10 col-md-8">
            <img alt="Популярные направления" src={calendar} />
            <Title>Лучшие цены на авиабилеты за последний месяц </Title>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-10 col-xl-offset-1 col-xs-12">
            <div className="row between-xl center-md">
              <div className="col-xl-4 col-md-10">
                <BestPrice destination={destinations.simferopol} first />
              </div>
              <div className="col-xl-4 col-md-10">
                <BestPrice destination={destinations.erevan} />
              </div>
              <div className="col-xl-4 col-md-10">
                <BestPrice destination={destinations.kishinev} noBorder />
              </div>
            </div>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-10 col-md-12 col-xl-8">
            <Text>
              Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
              стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств
              и 728 авиакомпаний.
            </Text>
            <Note>
              Цены, найденные пользователями за последние 48 часов, не являются
              офертой.
            </Note>
          </div>
        </div>
      </div>
    </BestPrices>
  );
}
