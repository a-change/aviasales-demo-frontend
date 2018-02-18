import React from "react";
import styled from "styled-components";
import star from "./star.svg";
import halfStar from "./half-star.svg";
import phone from "./phone.png";
import iphone from "./iphone.svg";
import android from "./android.svg";
import wp from "./wp.svg";

const MobileApp = styled.section`
  background: linear-gradient(#00b0de, #196ebd);
  padding-top: 24px;
  color: white;

  @media (min-width: 768px) {
    padding-top: 45px;
  }
`;

const Title = styled.h3`
  font-size: 24px;
  line-height: 28px;
  font-weight: normal;
  text-align: center;
  margin: 0px;

  @media (min-width: 768px) {
    text-align: left;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const Rating = styled.div`
  font-size: 14px;
  line-height: 20px;

  margin-top: 19px;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Stars = styled.div`
  display: flex;
  margin-right: 8px;
`;

const Star = styled.img``;

const Apps = styled.div`
  display: flex;
  position: relative;
`;

const Phone = styled.img`
  width: 162px;
  height: 213px;

  @media (min-width: 768px) {
    width: 237px;
    height: 312px;
    position: absolute;
    bottom: 0px;
    left: 0px;
  }

  @media (min-width: 1200px) {
    left: 100px;
  }
`;

const PhoneTypes = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 15px;

  @media (min-width: 768px) {
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 0px;
    padding-bottom: 54px;
    padding-top: 40px;
  }

  @media (min-width: 1200px) {
    justify-content: flex-start;
  }
`;

const PhoneType = styled.p`
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    border-right: ${props => (props.noBorder ? "none" : "1px solid white")};
    padding-right: 20px;
  }

  @media (min-width: 1200px) {
    padding-left: ${props => (props.noPadding ? "0px" : "20px")};
  }
`;

const PhoneLogo = styled.img`
  margin-right: 8px;
`;

export default function() {
  return (
    <MobileApp>
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-4 col-xl-8">
            <Title>Скачай мобильное приложение Aviasales.ru</Title>
            <Rating>
              <Stars>
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={star} />
                <Star src={halfStar} />
              </Stars>
              Более 103 000 оценок
            </Rating>
          </div>
        </div>
        <div className="row-wrap">
          <Apps>
            <Phone src={phone} alt="Мобильное приложение" />
            <div className="col-xs-6 col-md-8 col-md-offset-4 col-xl-6 col-xl-offset-4">
              <PhoneTypes>
                <PhoneType noPadding>
                  <PhoneLogo src={iphone} alt="" /> iPhone или iPad
                </PhoneType>
                <PhoneType>
                  <PhoneLogo src={android} alt="" /> Android
                </PhoneType>
                <PhoneType noBorder>
                  <PhoneLogo src={wp} alt="" /> Windows Phone
                </PhoneType>
              </PhoneTypes>
            </div>
          </Apps>
        </div>
      </div>
    </MobileApp>
  );
}
