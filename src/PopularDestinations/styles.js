import styled from "styled-components";

export const PopularDestinations = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f8fcff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    padding-top: 56px;
    padding-bottom: 40px;
  }
  @media (min-width: 1200px) {
    padding-bottom: 44px;
  }
`;

export const Title = styled.h3`
  font-size: 18px;
  font-style: regular;
  line-height: 24px;
  text-align: center;
  margin-top: 24px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    margin-top: 20px;
    font-size: 24px;
    line-height: 36px;
  }
  @media (min-width: 1200px) {
    margin-top: 20px;
    font-size: 24px;
    line-height: 36px;
  }
`;

export const Text = styled.p`
  flex-basis: 80%;
  margin: 0px 16px;
  @media (min-width: 768px) {
    flex-basis: 65%;
  }
  @media (min-width: 1200px) {
    flex-basis: 65%;
  }
`;

export const ChosenCity = styled.span`
  color: #00ace2;
  display: block;
  @media (min-width: 768px) {
    display: inline;
    font-size: 24px;
    line-height: 36px;
  }
  @media (min-width: 768px) {
    display: inline;
    font-size: 24px;
    line-height: 36px;
  }
`;

export const Destinations = styled.div`
  margin-top: 40px;
  @media (min-width: 768px) {
    margin-top: 56px;
  }
  @media (min-width: 1200px) {
    margin-top: 55px;
  }
`;
