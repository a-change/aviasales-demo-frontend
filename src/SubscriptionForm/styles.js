import styled from "styled-components";
import border from "./border.png";

export const SubscriptionForm = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    padding-top: 25px;
  }
  @media (min-width: 1200px) {
    margin-bottom: 32px;
  }
`;

export const Border = styled.hr`
  display: block;
  border: none;
  background: url(${border}) repeat-x;
  height: 7px;

  @media (min-width: 1200px) {
    margin-bottom: 32px;
  }
`;

export const Description = styled.div``;

export const Title = styled.h3`
  color: #5c5c5c;
  font-size: 16px;
  line-height: 20px;
  margin: 0px;
  margin-bottom: 4px;
`;

export const Note = styled.aside`
  color: #5c5c5c;
  font-size: 16px;
  line-height: 22px;
`;

export const Socials = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (min-width: 1200px) {
    margin-top: 0px;
    display: flex;
  }
`;

export const SubscriptionElements = styled.div`
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1200px) {
    display: flex;
  }
`;
