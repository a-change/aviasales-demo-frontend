import React from "react";
import SpecialOffer from "./SpecialOffer";
import { SpecialOffers, Title, Note, Link } from "./styles";
import { offers } from "./offers";

export default function() {
  return (
    <SpecialOffers>
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-md-8 col-md-offset-0 col-xl-5 col-xl-offset-1">
            <Title>Спецпредложения на авиабилеты</Title>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-offset-1 col-xl-10">
            <div className="row between-xl">
              <div className="col-xs-12 col-md-4">
                <SpecialOffer offer={offers[0]} />
              </div>
              <div className="col-xs-12 col-md-4 ">
                <SpecialOffer offer={offers[1]} />
              </div>
              <div className="col-xs-12 col-md-4">
                <SpecialOffer offer={offers[2]} />
              </div>
            </div>
          </div>
        </div>
        <Note>
          <p>
            <Link href="" title="more stuff">
              Смотреть все спецпредложения
            </Link>
          </p>
          <p>* средняя цена по направлению</p>
        </Note>
      </div>
    </SpecialOffers>
  );
}
