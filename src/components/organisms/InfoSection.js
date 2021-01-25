import React from 'react';
import styled from 'styled-components';
import InfoAreoContent from 'components/molecules/InfoSections/InfoAreoContent';
import MasornyGallery from 'components/molecules/InfoSections/MasornyGallery';
import InfoContent from 'components/molecules/InfoSections/InfoContent';

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 70px 0;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 180px 0;
  }
`;

const InfoSection = () => (
  <StyledWrapper>
    <InfoContent />
    <InfoAreoContent />
    <MasornyGallery />
  </StyledWrapper>
);

export default InfoSection;
