import React from 'react';
import styled from 'styled-components';
import FormImage from 'components/molecules/Form/FormImage';
import FormSectionContent from 'components/molecules/Form/FormSectionContent';
import Form from 'components/molecules/Form/Form';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 60px 32px;
`;

const FromSection = () => (
  <StyledWrapper>
    <FormImage />
    <FormSectionContent />
    <Form />
    <FormImage second />
  </StyledWrapper>
);

export default FromSection;
