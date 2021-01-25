import React from 'react';
import styled from 'styled-components';
import Title from 'components/atoms/Title';
import InfoItem from 'components/molecules/InfoSections/InfoItem';
import InfoImages from 'components/molecules/InfoSections/InfoImages';
import { ReactComponent as Fuel } from 'assets/InfoIcon/Fuel.svg';

const infoContent = [
  {
    title: '01',
    content: 'Ponad 600 km zasięgu *',
  },
  {
    title: '02',
    content:
      'Elektryczny napęd na wszystkie koła z dwiema osiami napędzanymi elektrycznie i ponad 500 KM (370 kW) *',
  },
  {
    title: '03',
    content: 'Od 0 do 100 km / hw mniej niż 5 sekund *',
  },
  {
    title: '04',
    content: 'Ładowanie 120 km w 10 minut *',
  },
  {
    title: '05',
    content: 'Publiczne szybkie ładowanie od 10 do 80% w mniej niż 40 minut',
  },
];

const StyledContentWrapper = styled.div`
  padding: 60px 32px 120px;
`;

const StyledWrapper = styled.div`
  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 80px;
    height: 100vh;
  }
`;

const StyledInfoContentWrapper = styled.div`
  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-gap: 60px 30px;
    grid-auto-rows: minmax(170px, auto);
    grid-auto-flow: row dense;
  }
`;

const InfoSection = () => (
  <StyledWrapper>
    <InfoImages />
    <StyledContentWrapper>
      <Fuel />
      <Title as="h2" info>
        FAKTY O NOWYM BMW iX.
      </Title>
      <StyledInfoContentWrapper>
        {infoContent.map((item) => (
          <InfoItem title={item.title} content={item.content} />
        ))}
      </StyledInfoContentWrapper>
    </StyledContentWrapper>
  </StyledWrapper>
);

export default InfoSection;
