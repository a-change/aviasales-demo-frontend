import React from "react";
import {
  Footer,
  Title,
  Text,
  InlineText,
  Bottom,
  SiteLinks,
  AdditionalInfo,
  SocialLinks,
  SocialLink,
  RentingHotels,
  AppStores,
  AppStoreImage,
  FooterEnd,
  AviaSales
} from "./styles";
import vk from "./vk.svg";
import fb from "./fb.svg";
import instagram from "./instagram.svg";
import tw from "./tw.svg";
import viber from "./viber.svg";
import googlePlay from "./google-play.png";
import appStore from "./appstore.png";
import wp from "./wp.png";

export default function() {
  return (
    <Footer>
      <SiteLinks>
        <div className="container">
          <div className="row">
            <div className="col-xs-6 col-md-3 col-xl-2">
              <Title>Cтраны</Title>
              <Text href="#">Россия</Text>
              <Text href="#">Таиланд</Text>
              <Text href="#">Черногория</Text>
              <Text href="#">Кипр</Text>
              <Text href="#">Болгария</Text>
              <Text href="#">Грузия</Text>
              <Bottom href="#">Все страны</Bottom>
            </div>
            <div className="col-xs-6 col-md-3 col-xl-2">
              <Title>Города</Title>
              <Text href="#">Москва</Text>
              <Text href="#">Санкт-Петербург</Text>
              <Text href="#">Симферополь</Text>
              <Text href="#">Адлер</Text>
              <Text href="#">Екатеринбург</Text>
              <Text href="#">Лондон</Text>
              <Bottom href="#">Все города</Bottom>
            </div>
            <div className="col-xs-6 col-md-3 col-xl-2">
              <Title>Авиакомпании</Title>
              <Text href="#">Air Berlin</Text>
              <Text href="#">Air France</Text>
              <Text href="#">Alitalia</Text>
              <Text href="#">Air Baltic</Text>
              <Text href="#">Emirates</Text>
              <Text href="#">KLM</Text>
              <Bottom href="#">Все авиакомпании</Bottom>
            </div>
            <div className="col-xs-6 col-md-3 col-xl-2">
              <Title>Аэропорты</Title>
              <Text href="#">Шереметьево</Text>
              <Text href="#">Курумоч</Text>
              <Text href="#">Домодедово</Text>
              <Text href="#">Толмачево</Text>
              <Text href="#">Владивосток</Text>
              <Text href="#">Гамбург</Text>
              <Bottom href="#">Все аэропорты</Bottom>
            </div>
            <div className="col-xs-6 col-md-3 col-xl-2">
              <Title>Направления</Title>
              <Text href="#">MOW – SIP</Text>
              <Text href="#">MOW – AER</Text>
              <Text href="#">MOW – TIV</Text>
              <Text href="#">MOW – MRV</Text>
              <Text href="#">LED – MOW</Text>
              <Text href="#">MOW – BKK</Text>
            </div>
            <div className="col-xs-6 col-md-3 col-xl-2">
              <Title>Сервисы</Title>
              <Text href="#">Горящие авиабилеты</Text>
              <Text href="#">Календарь низких цен</Text>
              <Text href="#">Карта низких цен</Text>
              <Text href="#">Спецпредложения</Text>
              <Text href="#">Таблица цен</Text>
              <Text href="#">Блог</Text>
              <Text href="#">Помощь</Text>
            </div>
          </div>
        </div>
      </SiteLinks>
      <div className="container">
        <div className="row">
          <FooterEnd>
            <div className="col-xs-12 col-md-12 col-xl-10">
              <div className="row">
                <div className="col-xs-12 col-md-12 col-xl-10">
                  <AdditionalInfo>
                    <InlineText href="#">О компании</InlineText>
                    <InlineText href="#">Партнерская программа</InlineText>
                    <InlineText href="#">Реклама</InlineText>
                    <InlineText href="#">Вакансии</InlineText>
                    <InlineText href="#">Помощь</InlineText>
                    <InlineText href="#">Правила</InlineText>
                    <InlineText href="#">WhiteLabel авиабилеты</InlineText>
                  </AdditionalInfo>
                </div>
              </div>
              <div className="row">
                <div className="col-xs-12 col-md-12 col-xl-9">
                  <SocialLinks>
                    <SocialLink href="#">
                      <img src={vk} alt="" /> Вконтакте
                    </SocialLink>
                    <SocialLink href="#">
                      {" "}
                      <img src={fb} alt="" /> Фейсбук
                    </SocialLink>
                    <SocialLink href="#">
                      <img src={instagram} alt="" /> Инстаграмм
                    </SocialLink>
                    <SocialLink href="#">
                      <img src={tw} alt="" /> Твиттер
                    </SocialLink>
                    <SocialLink href="#">
                      <img src={viber} alt="" /> Вайбер
                    </SocialLink>
                  </SocialLinks>
                </div>
              </div>

              <div className="row">
                <div className="col-xs-12 col-md-12 col-xl-6">
                  <RentingHotels>
                    <InlineText href="#">
                      Поиск и бронирование отелей
                    </InlineText>
                  </RentingHotels>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-12 col-xl-4">
              <AppStores>
                <AppStoreImage src={appStore} />
                <AppStoreImage src={googlePlay} />
                <AppStoreImage src={wp} />
              </AppStores>
              <AviaSales>
                <InlineText>
                  © 2007–2018, Aviasales — дешевые авиабилеты
                </InlineText>
              </AviaSales>
            </div>
          </FooterEnd>
        </div>
      </div>
    </Footer>
  );
}
