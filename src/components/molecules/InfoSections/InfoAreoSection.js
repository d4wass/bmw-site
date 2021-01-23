import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CarIcon } from 'assets/InfoIcon/Car.svg';
import Subtitle from 'components/atoms/SubTitle';
import Paragraph from 'components/atoms/Paragraph';

const StyledWrapper = styled.section`
  display: flex;
  flex-direction: column;
`;

const StyledContentWrapper = styled.div`
  padding: 0 32px 120px;
`;

const StyledTitle = styled.h2`
  width: 60vw;
  font-family: 'Cairo', sans-serif;
  font-size: 2.4rem;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.colors.black};
  line-height: 2.8rem;
  margin: 30px 0;
`;

const InfoAreoSection = () => (
  <StyledWrapper>
    <StyledContentWrapper>
      <CarIcon />
      <StyledTitle>
        INNOWACYJNA
        <br /> AERODYNAMIKA
        <br /> BMW iX.
      </StyledTitle>
      <Subtitle info>
        BMW iX w każdym milimetrze swojej dynamicznej stylistyki wdraża zasadę „forma podąża za
        funkcją”.
      </Subtitle>
      <Paragraph info>
        Widać to przede wszystkim po gładkiej karoserii ze zwężoną nadbudową kabiny i zredukowanymi
        fugami oraz po płaskim podwoziu. W połączeniu z zamkniętym przodem oraz dyfuzorem z tyłu i
        niezwykłymi detalami, takimi jak wpuszczane klamki czy zintegrowane z listwami szybowymi
        lusterka zewnętrzne, BMW iX osiąga doskonały współczynnik Cx wynoszący zaledwie 0,25. Dzięki
        temu łączy w sobie zasięg i wydajność z innowacyjną konstrukcją SAV-a.
      </Paragraph>
    </StyledContentWrapper>
  </StyledWrapper>
);

export default InfoAreoSection;
