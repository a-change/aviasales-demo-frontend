import React from "react";
import styled from "styled-components";

const SpecialOffer = styled.div`
  margin-bottom: 12px;
`;

const Title = styled.div`
  background-color: #cd2027;

  padding: 22px 16px 22px 16px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    padding-right: 6px;
  }
  @media (min-width: 1200px) {
  }
`;

const Text = styled.h3`
  color: white;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  margin: 0px;
`;

const Description = styled.div`
  background-color: white;
  padding: 18px 8px 16px 8px;
  font-size: 12px;
  line-height: 16px;
  color: #5c5c5c;
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Money = styled.span`
  font-size: 16px;
  line-height: 20px;
`;

const Image = styled.img`
  width: 122px;
  height: 30px;

  @media (min-width: 768px) {
    width: 100px;
    height: 25px;
  }

  @media (min-width: 1200px) {
    width: 120px;
    height: 30px;
  }
`;

const AdditionalLogo = styled.img`
  width: 30px;
  height: 30px;
`;

const Offer = styled.div`
  text-align: right;
`;

const TimeLeft = styled.div`
  color: #d93633;
`;

const Note = styled.aside`
  padding-bottom: 27px;
  padding-top: 17px;
`;

const Button = styled.button`
  width: 100%;

  background-color: inherit;
  border: 2px solid #cd1f27;
  border-radius: 3px;

  padding-top: 10px;
  padding-bottom: 10px;

  font-size: 16px;
  line-height: 20px;
  color: #d93533;

  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #d93533;
    color: #ffffff;
  }
`;

export default props => {
  return (
    <SpecialOffer>
      <Title>
        <Text>{props.offer.title}</Text>
        <AdditionalLogo src={props.offer.additionalLogo} alt="" />
      </Title>
      <Description>
        <FirstRow>
          <Image src={props.offer.logo} />
          <Offer>
            от <Money>{props.offer.price}</Money>
            <TimeLeft>{props.offer.timeLeft}</TimeLeft>
          </Offer>
        </FirstRow>
        <Note>{props.offer.note}</Note>
        <Button>Узнать подробности</Button>
      </Description>
    </SpecialOffer>
  );
};
