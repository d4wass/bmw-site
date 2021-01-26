import React from 'react';
import styled, { css } from 'styled-components';
import SocialNavigation from 'components/molecules/Footer/SocialNavigation';
import FooterNavigation from 'components/molecules/Footer/FooterNavigation';

const footerNavLinks = {
  customer: [
    { content: 'Centrum Obsługi Klienta BMW', id: 1 },
    { content: 'Znajdź dealera BMW', id: 2 },
    { content: 'Pobierz cenniki / broszury', id: 3 },
    { content: 'Często zadawane pytania', id: 4 },
  ],
  aboutUs: [
    { content: 'Informacje prasowe', id: 1 },
    { content: 'BMW Polska', id: 2 },
    { content: 'Kariera', id: 3 },
  ],
  legalInfo: [
    { content: 'Mapa serwisu', id: 1 },
    { content: 'Nota prawna / Prywatność', id: 2 },
    { content: 'Polityka cookie', id: 3 },
    { content: 'Warunki korzystania z MyBMW', id: 3 },
  ],
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21% 8% 7% 8%;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    padding: 0 15vw;
  }
`;

const StyledSection = styled.div`
  padding-top: 25%;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    display: flex;
    justify-content: flex-start;
    padding: 6vh 0 6vw 0;

    ${({ copyright }) =>
      copyright &&
      css`
        padding: 2vh 15vw;
      `}
  }

  ${({ copyright }) =>
    copyright &&
    css`
      padding: 2vh 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.white};
    `}
`;

const StyledSpan = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.colors.paragraph};
`;

const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer.background};
`;

const Footer = () => (
  <StyledFooter>
    <StyledWrapper>
      <SocialNavigation />
      <StyledSection>
        <FooterNavigation title="Strefa Klienta" items={footerNavLinks.customer} />
        <FooterNavigation title="Poznaj BMW" items={footerNavLinks.aboutUs} />
        <FooterNavigation title="Informacje Prawne" items={footerNavLinks.legalInfo} />
      </StyledSection>
    </StyledWrapper>
    <StyledSection copyright>
      <StyledSpan>© BMW Polska 2020</StyledSpan>
    </StyledSection>
  </StyledFooter>
);

export default Footer;
