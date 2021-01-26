import React from 'react';
import styled from 'styled-components';
import InfoAreoContent from 'components/molecules/InfoSections/InfoAreoContent';
import MasornyGallery from 'components/molecules/InfoSections/MasornyGallery';
import InfoContent from 'components/molecules/InfoSections/InfoContent';

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 19% 0;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 10% 0;
  }
`;

const InfoSection = () => (
  <StyledWrapper id="about">
    <InfoContent />
    <InfoAreoContent />
    <MasornyGallery />
  </StyledWrapper>
);

export default InfoSection;
