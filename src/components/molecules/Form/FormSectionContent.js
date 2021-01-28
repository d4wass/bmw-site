import React from 'react';
import styled, { css } from 'styled-components';
import Title from 'components/atoms/Title';
import Subtitle from 'components/atoms/SubTitle';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    margin-bottom: 90px;
  }
`;

const StyledTitle = styled(Title)`
  display: inline-flex;
  margin-bottom: 30px;
  font-size: 2.1rem;
  @media ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 2.4rem;
  }
`;

const StyledSpan = styled.span`
  ${({ small }) =>
    small &&
    css`
      font-size: 1.2rem;
      margin: 0 6px;
    `}
`;

const FormSectionContent = () => (
  <StyledWrapper>
    <StyledTitle>
      UMÓW JAZDĘ PRÓBNĄ <StyledSpan small>BMW iX</StyledSpan>
    </StyledTitle>
    <Subtitle>Zachęcamy do ograniczenia poruszania się i pozostania w domu. </Subtitle>
    <br />
    <Subtitle>
      Jeśli jednak jazda testowa okaże się niezbędna prosimy o wypełnienie poniższego formularza.
    </Subtitle>
  </StyledWrapper>
);

export default FormSectionContent;
