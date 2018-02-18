import React from "react";
import styled from "styled-components";

const Social = styled.a`
  background-color: #979797;
  border-radius: 50%;

  height: 36px;
  width: 36px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 18px;
  width: 18px;
`;

export default props => {
  return (
    <Social href={props.href} title={props.alt}>
      <Image src={props.src} alt={props.alt} />
    </Social>
  );
};
