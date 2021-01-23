import React from 'react';
import styled, { css } from 'styled-components';
import SocialNavigation from 'components/molecules/Footer/SocialNavigation';
import FooterNavigation from 'components/molecules/Footer/FooterNavigation';

const footerNavLinks = {
  customer: [
    'Centrum Obsługi Klienta BMW',
    'Znajdź dealera BMW',
    'Pobierz cenniki / broszury',
    'Często zadawane pytania',
  ],
  aboutUs: ['Informacje prasowe', 'BMW Polska', 'Kariera'],
  legalInfo: [
    'Mapa serwisu',
    'Nota prawna / Prywatność',
    'Polityka cookie',
    'Warunki korzystania z MyBMW',
  ],
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 90px 32px 30px 32px;
`;

const StyledSection = styled.section`
  padding-top: 90px;
  ${({ copyright }) =>
    copyright &&
    css`
      padding: 17px 0;
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
