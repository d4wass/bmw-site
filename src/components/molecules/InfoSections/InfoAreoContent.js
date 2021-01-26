import React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as CarIcon } from 'assets/InfoIcon/Car.svg';
import Subtitle from 'components/atoms/SubTitle';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';
import InfoImages from 'components/molecules/InfoSections/InfoImages';

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 100%;

    ${({ text }) =>
      text &&
      css`
        width: 55%;
        align-items: flex-start;
      `}
  }
`;

const StyledWrapper = styled.div`
  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: flex;
    flex-direction: row-reverse;
    height: 100vh;
    align-items: center;
    padding: 0 4vw;
  }
`;

const InfoAreoSection = () => (
  <StyledWrapper id="aero">
    <InfoImages reverse />
    <StyledContentWrapper>
      <StyledContentWrapper text>
        <CarIcon />
        <Title as="h2" info>
          INNOWACYJNA AERODYNAMIKA BMW iX.
        </Title>
        <Subtitle info>
          BMW iX w każdym milimetrze swojej dynamicznej stylistyki wdraża zasadę „forma podąża za
          funkcją”.
        </Subtitle>
        <Paragraph info>
          Widać to przede wszystkim po gładkiej karoserii ze zwężoną nadbudową kabiny i
          zredukowanymi fugami oraz po płaskim podwoziu. W połączeniu z zamkniętym przodem oraz
          dyfuzorem z tyłu i niezwykłymi detalami, takimi jak wpuszczane klamki czy zintegrowane z
          listwami szybowymi lusterka zewnętrzne, BMW iX osiąga doskonały współczynnik Cx wynoszący
          zaledwie 0,25. Dzięki temu łączy w sobie zasięg i wydajność z innowacyjną konstrukcją
          SUV-a.
        </Paragraph>
      </StyledContentWrapper>
    </StyledContentWrapper>
  </StyledWrapper>
);

export default InfoAreoSection;
