import styled from "styled-components";

export const Footer = styled.footer``;

export const Title = styled.h3`
  margin: 0px;
  margin-bottom: 16px;
  font-size: 12px;
  line-height: 16px;
  align: left;
  text-transform: uppercase;
  padding-top: 32px;
  @media (min-width: 768px) {
    padding-top: 40px;
    margin-bottom: 20px;
  }
  @media (min-width: 1200px) {
    padding-top: 45px;
  }
`;

export const Text = styled.a`
  display: block;
  color: #5b5b5c;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 12px;
  font-weight: normal;
  transition: color 0.3s;
  text-decoration: none;
  &:hover {
    color: #fd8a27;
  }
`;

export const InlineText = Text.extend`
  display: inline;
  margin-right: 6px;
  margin-bottom: 8px;
`;

export const Bottom = styled.a`
  display: block;
  font-size: 12px;
  line-height: 16px;
  color: #4a4a4a;
  text-decoration: none;
  font-weight: 500;
  &:after {
    content: " →";
    position: absolute;
    transform: translateX(2px);
    transition: 0.2s ease-in-out;
  }
  &:hover {
    color: #fd8a27;
    &:after {
      transform: translateX(4px);
    }
  }
`;

export const SiteLinks = styled.div`
  border-bottom: 1px solid #e0e6e8;
  padding-bottom: 24px;
  width: 100%;
  @media (min-width: 1200px) {
    padding-bottom: 29px;
  }
`;

export const AdditionalInfo = styled.div`
  padding-top: 24px;
  display: flex;
  flex-flow: row wrap;
  @media (min-width: 1200px) {
    padding-top: 40px;
  }
`;

export const SocialLinks = styled.div`
  padding-top: 8px;
  display: flex;
  flex-flow: row wrap;
  @media (min-width: 1200px) {
    padding-top: 17px;
  }
`;

export const SocialLink = InlineText.extend`
  margin-bottom: 12px;
  @media (min-width: 1200px) {
    margin-bottom: 0px;
  }
`;

export const RentingHotels = styled.div`
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
  @media (min-width: 1200px) {
    padding-top: 32px;
    margin-bottom: 43px;
  }
`;

export const AviaSales = RentingHotels.extend`
  margin-bottom: 24px;
  @media (min-width: 1200px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export const AppStores = styled.div`
  padding-top: 16px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  @media (min-width: 768px) {
    flex-flow: row wrap;
    justify-content: flex-start;
  }
  @media (min-width: 1200px) {
    padding-top: 40px;
    flex-wrap: nowrap;
    justify-content: flex-end;
  }
`;

export const AppStoreImage = styled.img`
  margin-bottom: 8px;
  width: 125px;
  height: 42px;
  text-align: center;
  @media (min-width: 768px) {
    padding-right: 10px;
  }
`;

export const FooterEnd = styled.div`
  @media (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }
`;
