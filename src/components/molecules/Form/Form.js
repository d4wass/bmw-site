import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import Input from 'components/atoms/Input';
import Title from 'components/atoms/Title';

const StyledButton = styled(Button)`
  width: 165px;
  height: 46px;
  padding: 10px 60px;
  margin-top: 15px;
`;

const Form = () => (
  <form>
    <Title form>Wypełnij formularz swoimi danymi.</Title>
    <Input placeholder="Imię*" />
    <Input placeholder="Nazwisko*" />
    <Input placeholder="E-mail*" />
    <Input placeholder="Numer Telefonu*" />
    <StyledButton>WYŚLIJ</StyledButton>
  </form>
);

export default Form;
