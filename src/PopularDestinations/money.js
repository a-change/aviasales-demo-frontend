import React from "react";
import styled from "styled-components";

const Money = styled.div`
  color: {(props.color ? props.color : "#00bae8")};
  font-size: ${props => (props.popularDestinations ? "14px" : "16px")};
  line-height: 20px;

  cursor: pointer;

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
  color: ${props => (props.color ? props.color : "#00bae8")};

  &:hover {
    color: ${props => (props.popularDestinations ? "inherit" : "#ff9d1b")};
  }
`;

const FormatMoney = function(props) {
  if (props.price === undefined) return null;
  let price = props.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return (
    <Money>
      <Wording>
        {props => (props.popularDestinations ? "Найти " : "")}
        от {price} ₽
      </Wording>
    </Money>
  );
};

export default FormatMoney;
