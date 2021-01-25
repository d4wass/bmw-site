import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import FormImage from 'components/molecules/Form/FormImage';
import FormSectionContent from 'components/molecules/Form/FormSectionContent';
import Form from 'components/molecules/Form/Form';
import ThanksInfo from 'components/molecules/ThanksInfo';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 32px;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row-reverse;
    justify-content: center;
    padding: 180px 0;
    position: relative;

    ${({ form }) =>
      form &&
      css`
        background-color: #fff;
        flex-direction: column;
        padding: 90px;
        box-shadow: 3px 3px 60px rgba(0, 0, 0, 0.1);
        max-width: 42vw;
        position: relative;
        z-index: 2;
      `}
  }
`;

const FromSection = () => {
  const [isSend, setSend] = useState(false);

  const handleSend = () => {
    setSend(!isSend);
  };

  return (
    <StyledWrapper>
      {isSend && <ThanksInfo handleClose={handleSend} />}
      <FormImage />
      <StyledWrapper form>
        <FormSectionContent />
        <Form handleSend={handleSend} />
      </StyledWrapper>
      <FormImage second />
    </StyledWrapper>
  );
};

export default FromSection;
