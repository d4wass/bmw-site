import React from 'react';
import styled from 'styled-components';
import Title from 'components/atoms/Title';
import { ReactComponent as Twitter } from 'assets/SocialIcon/Twitter.svg';
import { ReactComponent as Linkedin } from 'assets/SocialIcon/Linkedin.svg';
import { ReactComponent as Youtube } from 'assets/SocialIcon/Youtube.svg';
import { ReactComponent as Instagram } from 'assets/SocialIcon/Instagram.svg';
import { ReactComponent as Facebook } from 'assets/SocialIcon/Facebook.svg';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px #bebebe solid;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 35px 0;
  }
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-bottom: 30px;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    margin-bottom: 0;
  }
`;
const StyledListItem = styled.li`
  margin-right: 20px;
  cursor: pointer;
`;

const SocialIcon = styled(Twitter, Instagram, Facebook, Youtube, Linkedin)`
  height: 32px;
  width: 32px;
`;

const SocialNavigation = () => (
  <StyledWrapper>
    <Title footer>Dołącz do nas</Title>
    <StyledList>
      <StyledListItem>
        <SocialIcon as={Facebook} />
      </StyledListItem>
      <StyledListItem>
        <SocialIcon as={Instagram} />
      </StyledListItem>
      <StyledListItem>
        <SocialIcon as={Youtube} />
      </StyledListItem>
      <StyledListItem>
        <SocialIcon as={Linkedin} />
      </StyledListItem>
      <StyledListItem>
        <SocialIcon as={Twitter} />
      </StyledListItem>
    </StyledList>
  </StyledWrapper>
);

export default SocialNavigation;
