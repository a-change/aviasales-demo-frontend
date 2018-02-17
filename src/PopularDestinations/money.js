import React from "react";
import styled from "styled-components";

const Money = styled.div`
  color: {(props.color ? props.color : "#00bae8")};
  font-size: ${props => (props.popularDestinations ? "14px" : "16px")};
  line-height: 20px;
  @media (min-width: 768px) {
    font-size: 21px;
    line-height: 31px;
  }
  @media (min-width: 1200px) {
    font-size: ${props => (props.popularDestinations ? "22px" : "16px")};
    line-height: ${props => (props.popularDestinations ? "32px" : "20px")};
  }
`;

const Wording = styled.span`
font-size: {(props.color ? props.color : "#00bae8")}; 
`;

export default props => {
  let price = props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return (
    <Money>
      <Wording>
        {props => (props.popularDestinations ? "Найти " : "")}
        от
      </Wording>{" "}
      {price} ₽
    </Money>
  );
};
