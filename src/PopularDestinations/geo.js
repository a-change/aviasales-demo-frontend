import React from "react";
import styled from "styled-components";

const Geo = styled.div`
  text-align: left;
  display: flex;
`;

const City = styled.h3`
  margin: 0px;
  color: #5b5b5c;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  @media (min-width: 768px) {
    font-size: 21px;
    line-height: 31px;
  }
`;
const Country = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 20px;
  color: #a0b0b9;
  @media (min-width: 768px) {
    display: flex;
  }
`;

const Flag = styled.img`
  display: ${props => (props.popularDestinations ? "none" : "block")};
  @media (min-width: 768px) {
    display: block;
    height: 46px;
    margin-right: 7px;
  }
`;

export default props => {
  return (
    <Geo>
      <Flag
        src={props.destination.flag}
        alt={props.destination.country}
        popularDestinations={props.popularDestinations}
      />
      <div>
        <City>{props.destination.city}</City>
        <Country>{props.destination.country}</Country>
      </div>
    </Geo>
  );
};
