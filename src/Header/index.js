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
  InputWithIcon,
  DepartureCity,
  ArrivalCity,
  DepartureDate,
  ReturnDate,
  TravelDates,
  PassengerNumberSelect,
  TicketPriceCategory,
  FindTickets
} from "./styles";
import InputIcon from "./input-icon";

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
          <InputWithIcon>
            <DepartureCity
              type="text"
              placeholder="Город отправления"
              value="Москва"
            />
            <InputIcon alt="Поменять город" img={arrow} text="MOW" />
          </InputWithIcon>
          <ArrivalCity type="text" placeholder="Город прибытия" />
        </FormRow>
        <FormRow>
          <TravelDates>
            <InputWithIcon>
              <DepartureDate type="text" placeholder="Туда" />
              <InputIcon alt="arrow" img={calendar} />
            </InputWithIcon>
            <InputWithIcon>
              <ReturnDate placeholder="Обратно" />
              <InputIcon alt="arrow" img={calendar} />
            </InputWithIcon>
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
