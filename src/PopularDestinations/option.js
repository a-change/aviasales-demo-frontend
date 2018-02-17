import React from "react";
import styled from "styled-components";

const Option = styled.button`
  background: none;
  border: none;

  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;

  margin-top: 12px;
  padding-left: 0px;
  padding-right: 0px;

  border-bottom: ${props => (props.isActive ? "1px solid #00ACE2;" : "none")};
`;

const Icon = styled.img`
  height: 48px;
  width: 48px;
  padding: 13px;

  background: #ffffff;
  box-shadow: ${props =>
    props.isActive
      ? "0px 4px 16px rgba(74, 74, 74, 0.12)"
      : "0px 2px 4px rgba(74, 74, 74, 0.1)"};

  border-radius: 50px;
`;

const Desc = styled.h3`
  padding: 0 6px;
  position: relative;
  margin: 12px 0px 0px 0px;

  font-weight: normal;
  font-family: "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  line-height: 20px;
  font-size: 12px;
  text-transform: uppercase;
  text-align: center;
  color: ${props => (props.isActive ? "#5c5c5c" : "#00ace2")};
`;

export default props => {
  return (
    <Option isActive={props.isActive}>
      <Icon src={props.option.icon} alt={props.option.text} />
      <Desc isActive={props.isActive}>{props.option.text}</Desc>
    </Option>
  );
};
