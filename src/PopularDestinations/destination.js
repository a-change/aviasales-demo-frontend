import React from "react";
import styled from "styled-components";
import Geo from "./geo";
import Money from "./money";
const Card = styled.div`
  border-radius: 8px;
  background: white;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    margin-bottom: 25px;
  }

  @media (min-width: 1200px) {
    margin-bottom: 32px;
  }
`;
const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 12px 18px;

  @media (min-width: 768px) {
    padding: 12px 16px 16px 17px;
  }

  @media (min-width: 1200px) {
    padding: 12px 24px 16px 14px;
  }
`;

const Price = styled.div`
  text-align: right;
`;

const TheDate = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: #a0b0b9;
`;

const Image = styled.img`
  width: 100%;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`;

export default props => {
  return (
    <Card>
      <Image src={props.destination.img} alt={props.destination.city} />
      <Info>
        <Geo destination={props.destination} popularDestinations />
        <Price>
          <Money popularDestinations price={props.destination.bestPrice} />
          <TheDate>{props.destination.date}</TheDate>
        </Price>
      </Info>
    </Card>
  );
};
