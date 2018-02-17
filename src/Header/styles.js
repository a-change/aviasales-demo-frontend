import styled from "styled-components";
import caret from "./caret.svg";

export const Header = styled.header`
  padding-left: 6px;
  padding-right: 6px;
  background: linear-gradient(
    #00b0de,
    #01aedc,
    #02abdb,
    #02abdb,
    #02abdb,
    #196ebd
  );
`;

export const Logo = styled.div`
  padding-top: 12px;
  display: flex;
  align-items: center;

  @media (min-width: 1200px) {
    margin-left: 98px;
  }
`;

export const LogoText = styled.span`
  display: none;
  color: white;
  padding-left: 12px;

  @media (min-width: 768px) {
    display: inline;
  }

  @media (min-width: 1200px) {
    display: inline;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 20px;
  line-height: 23px;
  font-style: bold;
  text-align: center;
  margin-top: 47px;

  @media (min-width: 768px) {
    display: block;
    margin-bottom: 0px;
    font-size: 32px;
    line-height: 48px;
    font-style: bold;
  }

  @media (min-width: 1200px) {
    display: block;
    margin-top: 213px;
    margin-bottom: 0px;
    font-size: 40px;
    line-height: 48px;
    font-style: bold;
  }
`;

export const Note = styled.h3`
  display: none;
  color: white;
  text-align: center;

  @media (min-width: 768px) {
    display: block;
    margin-top: 8px;
    font-size: 20px;
    line-height: 23px;
    font-style: bold;
  }

  @media (min-width: 1200px) {
    display: block;
    margin-top: 8px;
    font-size: 24px;
    line-height: 28px;
    font-style: bold;
  }
`;

export const SearchTicketsForm = styled.form`
  padding-bottom: 88px;

  @media (min-width: 768px) {
    display: flex;
    flex-flow: column wrap;
    margin-left: 72px;
    margin-right: 72px;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding-bottom: 256px;
  }
`;

export const FormRow = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    flex-basis: ${props => (props.secondRow ? "50%" : "auto")};
  }
`;

export const InputWithIcon = styled.div`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const DepartureCity = styled.input`
  width: 100%;
  outline: none;
  border: none;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  padding: 18px 0px 18px 16px;
  margin-bottom: 2px;

  line-height: 20px;
  font-size: 16px;

  ::placeholder: {
    color: #a0b0b9;
  }

  @media (min-width: 768px) {
    border-top-right-radius: 0px;
  }

  @media (min-width: 1200px) {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 3px;
  }
`;

export const ArrivalCity = styled.input`
  width: 100%;
  outline: none;
  border: none;

  padding: 18px 0px 18px 16px;
  margin-bottom: 2px;

  line-height: 20px;
  font-size: 16px;

  ::placeholder: {
    color: #a0b0b9;
  }

  @media (min-width: 768px) {
    margin-left: 2px;
    border-top-right-radius: 3px;
  }

  @media (min-width: 1200px) {
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    margin-right: 2px;
  }
`;

export const DepartureDate = styled.input`
  width: 100%;
  outline: none;
  border: none;

  padding: 18px 0px 18px 16px;
  margin-right: 1px;

  line-height: 20px;
  font-size: 16px;

  @media (min-width: 768px) {
    border-bottom-left-radius: 3px;
  }

  @media (min-width: 1200px) {
    border-bottom-left-radius: 0px;
  }
`;

export const ReturnDate = styled.input`
  width: 100%;
  outline: none;
  border: none;

  padding: 18px 0px 18px 16px;
  margin-left: 1px;

  line-height: 20px;
  font-size: 16px;
`;

export const TravelDates = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2px;

  @media (min-width: 1200px) {
    flex-basis: 100%;
  }
`;

export const PassengerNumberSelect = styled.button`
  width: 100%;
  outline: none;
  border: none;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  padding: 18px 0px 18px 16px;

  background: white url(${caret});
  background-repeat: no-repeat;
  background-position: right 16px center;

  cursor: pointer;

  line-height: 20px;
  font-size: 16px;
  text-align: left;

  @media (min-width: 768px) {
    margin-bottom: 2px;
    margin-left: 2px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 3px;
  }

  @media (min-width: 1200px) {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    flex-basis: 60%;
  }
`;

export const TicketPriceCategory = styled.span`
  color: #a0b0b9;
`;

export const FindTickets = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background-color: #ff9241;

  padding: 13px 52px;
  margin-top: 16px;
  border: none;
  border-radius: 3px;

  color: white;
  font-size: 24px;
  line-height: 28px;

  @media (min-width: 768px) {
    width: auto;
    flex-grow: 0.07;
    margin-top: 32px;
  }

  @media (min-width: 1200px) {
    margin-top: 48px;
  }
`;
