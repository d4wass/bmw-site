import React from 'react';
import styled from 'styled-components';
import InfoItem from 'components/molecules/InfoSection/InfoItem';
import InfoImages from 'components/molecules/InfoSection/InfoImages';
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

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledContentWrapper = styled.div`
  padding: 60px 32px;
`;

const StyledTitle = styled.h2`
  width: 60vw;
  font-family: 'Cairo', sans-serif;
  font-size: 2.4rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.black};
  line-height: 2.8rem;
  margin-top: 25px;
`;

const InfoSection = () => (
  <StyledWrapper>
    <InfoImages />
    <StyledContentWrapper>
      <Fuel />
      <StyledTitle>FAKTY O NOWYM BMW iX.</StyledTitle>
      {infoContent.map((item) => (
        <InfoItem title={item.title} content={item.content} />
      ))}
    </StyledContentWrapper>
  </StyledWrapper>
);

export default InfoSection;
