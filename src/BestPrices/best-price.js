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

const PriceRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 16px;
  line-height: 20px;
`;

export default props => {
  var listPrices = props.destination.prices.map(function(price, key) {
    return (
      <PriceRow key={price.name}>
        <span>Из {price.from}</span>
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
