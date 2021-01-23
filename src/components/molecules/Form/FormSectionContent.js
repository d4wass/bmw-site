import React from 'react';
import styled from 'styled-components';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled(Title)`
  display: inline-flex;
`;

const FormSectionContent = () => (
  <StyledWrapper>
    <StyledTitle>
      UMÓW JAZDĘ PRÓBNĄ <Title small>BMW iX</Title>
    </StyledTitle>
    <Paragraph>Zachęcamy do ograniczenia poruszania się i pozostania w domu. </Paragraph>
    <br />
    <Paragraph>
      Jeśli jednak jazda testowa okaże się niezbędna prosimy o wypełnienie poniższego formularza.
    </Paragraph>
  </StyledWrapper>
);

export default FormSectionContent;
