import styled from "styled-components";
export const BestPrices = styled.section`
  padding-top: 32px;
  padding-bottom: 40px;
  background-color: #f8fcff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    padding-bottom: 60px;
  }
  @media (min-width: 1200px) {
    padding-bottom: 75px;
  }
`;

export const Title = styled.h2`
  color: #4a4a4a;
  font-size: 18px;
  line-height: 24px;
  padding-bottom: 40px;
  padding-top: 20px;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 36px;
    padding-bottom: 60px;
  }
`;

export const Text = styled.div`
  color: #4a4a4a;
  line-height: 20px;
  font-size: 16px;
  margin-bottom: 24px;
  margin-top: 40px;
  @media (min-width: 768px) {
    line-height: 26px;
    font-size: 16px;
    margin-bottom: 16px;
  }
  @media (min-width: 1200px) {
    margin-top: 80px;
  }
`;

export const Note = styled.aside`
  color: #a0b0b9;
  line-height: 20px;
  font-size: 14px;
`;

export const Prices = styled.div`
  @media (min-width: 1200px) {
    display: flex;
  }
`;
