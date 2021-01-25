import React from 'react';
import styled from 'styled-components';
import Title from 'components/atoms/Title';
// import Paragraph from 'components/atoms/Paragraph';
import Subtitle from 'components/atoms/SubTitle';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

const StyledTitle = styled(Title)`
  display: inline-flex;
`;

const FormSectionContent = () => (
  <StyledWrapper>
    <StyledTitle>
      UMÓW JAZDĘ PRÓBNĄ <Title small>BMW iX</Title>
    </StyledTitle>
    <Subtitle>Zachęcamy do ograniczenia poruszania się i pozostania w domu. </Subtitle>
    <br />
    <Subtitle>
      Jeśli jednak jazda testowa okaże się niezbędna prosimy o wypełnienie poniższego formularza.
    </Subtitle>
  </StyledWrapper>
);

export default FormSectionContent;
