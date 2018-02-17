import anywhere from "./anywhere.svg";
import sun from "./sun.svg";
import shopping from "./shopping.svg";
import culture from "./culture.svg";
import nightLife from "./night-life.svg";
import withKids from "./with-kids.svg";
import krasnodar from "./krasnodar.jpg";
import sochi from "./sochi.jpg";
import piter from "./piter.jpg";
import minVody from "./min-vody.jpg";
import simferopol from "./simferopol.jpg";
import barcelona from "./barcelona.jpg";
import flagRu from "./flag-ru.png";
import flagEsp from "./flag-esp.png";
import flagAm from "./flag-am.png";
import flagMd from "./flag-md.png";

export const options = {
  anywhere: { icon: anywhere, text: "Куда угодно" },
  sun: { icon: sun, text: "Солнце и море" },
  shopping: { icon: shopping, text: "Шопинг, город" },
  culture: { icon: culture, text: "Культура и история" },
  nightLife: { icon: nightLife, text: "Ночная жизнь" },
  withKids: { icon: withKids, text: "Отдых с детьми" }
};

export const destinations = {
  krasnodar: {
    img: krasnodar,
    city: "Краснодар",
    country: "Россия",
    flag: flagRu,
    bestPrice: 1212,
    date: "18 марта"
  },
  sochi: {
    img: sochi,
    city: "Сочи (Адлер)",
    country: "Россия",
    flag: flagRu,
    bestPrice: 1334,
    date: "27 марта"
  },
  piter: {
    img: piter,
    city: "Санкт-Петербург",
    country: "Россия",
    flag: flagRu,
    bestPrice: 1508,
    date: "19 февраля"
  },
  minVody: {
    img: minVody,
    city: "Минеральные Воды",
    country: "Россия",
    flag: flagRu,
    bestPrice: 2074,
    date: "13 марта"
  },
  simferopol: {
    img: simferopol,
    city: "Симферополь (Крым)",
    country: "Крым",
    flag: flagRu,
    bestPrice: 2407,
    date: "13 марта",
    prices: [
      {
        name: "Moscow",
        from: "Москвы",
        price: 4813
      },
      {
        name: "Saint-Petersbourg",
        from: "Санкт-Петербурга",
        price: 7857
      },
      {
        name: "Novosibirsk",
        from: "Новосибирска",
        price: 15127
      },
      {
        name: "Ekaterinburg",
        from: "Екатеринбурга",
        price: 9275
      },
      {
        name: "Chelyabinsk",
        from: "Челябинска",
        price: 9148
      }
    ]
  },
  barcelona: {
    img: barcelona,
    city: "Барселона",
    country: "Испания",
    flag: flagEsp,
    bestPrice: 4247,
    date: "24 марта"
  },
  erevan: {
    city: "Ереван",
    country: "Армения",
    flag: flagAm,
    prices: [
      {
        name: "Moscow",
        from: "Москвы",
        price: 6758
      },
      {
        name: "Saint-Petersbourg",
        from: "Санкт-Петербурга",
        price: 9932
      },
      {
        name: "Sochi",
        from: "Сочи",
        price: 11951
      },
      {
        name: "Krasnodar",
        from: "Краснодара",
        price: 11741
      },
      {
        name: "Rostov-na-Donu",
        from: "Ростова-на-Дону",
        price: 11956
      }
    ]
  },
  kishinev: {
    city: "Кишинев",
    country: "Молдавия",
    flag: flagMd,
    prices: [
      {
        name: "Moscow",
        from: "Москвы",
        price: 8319
      },
      {
        name: "Saint-Petersbourg",
        from: "Санкт-Петербурга",
        price: 10800
      },
      {
        name: "Krasnodar",
        from: "Краснодара",
        price: 12098
      },
      {
        name: "Surgut",
        from: "Сургута",
        price: 16277
      },
      {
        name: "Novy Urengoy",
        from: "Нового Уренгоя",
        price: 15987
      }
    ]
  }
};
