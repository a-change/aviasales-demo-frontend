import React from "react";
import styled from "styled-components";

const InputIcon = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  color: #a0b0b9;
`;

const Icon = styled.img`
  margin-right: 16px;
  margin-left: 11px;
`;

export default props => {
  return (
    <InputIcon>
      {props.text}
      <Icon alt={props.alt} src={props.img} />
    </InputIcon>
  );
};
