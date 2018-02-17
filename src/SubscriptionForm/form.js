import React from "react";
import styled from "styled-components";

const Form = styled.form`
  margin-top: 24px;
  margin-bottom: 61px;
  display: flex;
  @media (min-width: 1200px) {
    margin-top: 0px;
  }
`;

const Button = styled.button`
  background-color: #ff8e41;
  color: white;
  padding: 8px 20px 8px 20px;
  font-size: 16px;
  line-height: 20px;
`;

const Input = styled.input`
  padding: 7px 0px 7px 13px;
  font-size: 16px;
  line-height: 20px;
  ::placeholder: {
    color: #a0b0b9;
  }
`;

export default props => {
  return (
    <Form>
      <Input type="text" placeholder="Ваш емейл" />
      <Button type="submit">Подписаться</Button>
    </Form>
  );
};
