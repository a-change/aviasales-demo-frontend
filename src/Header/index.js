import React from "react";
import logo from "./logo.svg";
import arrow from "./arrow.svg";
import calendar from "./calendar.svg";
import aero from "./aero.svg";
import {
  Header,
  Logo,
  LogoText,
  Title,
  Note,
  SearchTicketsForm,
  FormRow,
  InputWithIconWrapper,
  InputIconWrapper,
  InputIcon,
  DepartureCity,
  ArrivalCity,
  DepartureDate,
  ReturnDate,
  TravelDates,
  PassengerNumberSelect,
  TicketPriceCategory,
  FindTickets
} from "./styles";

export default function() {
  return (
    <Header>
      <Logo>
        <img src={logo} alt="logo" />
        <LogoText>aviasales</LogoText>
      </Logo>
      <Title>Поиск дешевых авиабилетов</Title>
      <Note>Лучший способ купить авиабилеты дешево</Note>
      <SearchTicketsForm>
        <FormRow>
          <InputWithIconWrapper>
            <DepartureCity
              type="text"
              placeholder="Город отправления"
              value="Москва"
            />
            <InputIconWrapper>
              MOW
              <InputIcon alt="Поменять город" src={arrow} />
            </InputIconWrapper>
          </InputWithIconWrapper>
          <ArrivalCity type="text" placeholder="Город прибытия" />
        </FormRow>
        <FormRow>
          <TravelDates>
            <InputWithIconWrapper>
              <DepartureDate type="text" placeholder="Туда" />
              <InputIconWrapper>
                <InputIcon alt="arrow" src={calendar} />
              </InputIconWrapper>
            </InputWithIconWrapper>
            <InputWithIconWrapper>
              <ReturnDate placeholder="Обратно" />
              <InputIconWrapper>
                <InputIcon alt="arrow" src={calendar} />
              </InputIconWrapper>
            </InputWithIconWrapper>
          </TravelDates>
          <PassengerNumberSelect>
            1 пассажир, <TicketPriceCategory>эконом</TicketPriceCategory>
          </PassengerNumberSelect>
        </FormRow>
        <FormRow secondRow>
          <FindTickets>
            Найти билеты <img alt="Найти билеты" src={aero} />
          </FindTickets>
        </FormRow>
      </SearchTicketsForm>
    </Header>
  );
}
