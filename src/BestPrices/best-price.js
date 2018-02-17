import React from "react";
import styled from "styled-components";
import Geo from "../PopularDestinations/geo";
import Money from "../PopularDestinations/money";

const BestPrice = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: ${props => (props.noBorder ? "none" : "1px #AFBEC6 dashed")};

  @media (min-width: 1200px) {
    border-bottom: none;
    border-right: ${props => (props.noBorder ? "none" : "1px #AFBEC6 dashed")};
    padding-right: ${props => (props.noBorder ? "0px" : "24px")};
    padding-left: ${props => (props.first ? "0px" : "16px")};
  }
`;

const PricesList = styled.div`
  padding-top: 24px;
`;

const PriceRow = styled.a`
  display: flex;
  justify-content: space-between;

  margin-bottom: 16px;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;

  &:visited {
    color: inherit;
  }
`;

const DepartureCity = styled.span`
  cursor: pointer;

  &:hover {
    color: #ff9d1b;
    text-decoration: underline;
  }
`;

export default props => {
  var listPrices = props.destination.prices.map(function(price, key) {
    return (
      <PriceRow key={price.name} href="#">
        <DepartureCity>Из {price.from}</DepartureCity>
        <Money price={price.price} />
      </PriceRow>
    );
  });

  return (
    <BestPrice noBorder={props.noBorder}>
      <Geo destination={props.destination} />
      <PricesList>{listPrices}</PricesList>
    </BestPrice>
  );
};
