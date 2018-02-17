import React from "react";
import styled from "styled-components";
import aeroflot from "./aeroflot.png";
import s7 from "./s7.png";
import korean from "./korean-air.png";
import oneTwoTrip from "./one-two-trip.png";
import someAgency from "./some-agency.png";
import rightArrow from "./right-arrow.png";
import leftArrow from "./left-arrow.png";
import activeDot from "./dot-active.png";
import dot from "./dot.png";

const Slider = styled.div``;

const Page = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Images = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Image = styled.img`
  margin-bottom: 32px;

  @media (min-width: 1200px) {
    margin-right: 20px;
    margin-bottom: 10px;
  }
`;

const RightArrow = styled.button`
  border: none;
  background: url(${rightArrow}) center no-repeat;
  width: 20px;
  height: 34px;
  padding: 0;
  cursor: pointer;
`;

const LeftArrow = styled.button`
  border: none;
  background: url(${leftArrow}) center no-repeat;
  width: 20px;
  height: 34px;
  padding: 0;
  cursor: pointer;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1200px) {
    margin-top: 20px;
  }
`;

const Dot = styled.button`
  border: none;
  background: url(${props => (props.active ? activeDot : dot)}) center no-repeat;
  width: 20px;
  height: 34px;
  padding: 0;
  cursor: pointer;
`;

export default props => {
  return (
    <Slider>
      <Page>
        <LeftArrow />
        <Images>
          <Image src={aeroflot} alt="Аэрофлот" />
          <Image src={s7} alt="s7" />
          <Image src={oneTwoTrip} alt="oneTwoTrip" />
          <Image src={korean} alt="Korean Air" />
          <Image src={someAgency} alt="Some Agency" />
        </Images>
        <RightArrow />
      </Page>
      <Controls>
        <Dot active />
        <Dot />
        <Dot />
      </Controls>
    </Slider>
  );
};
