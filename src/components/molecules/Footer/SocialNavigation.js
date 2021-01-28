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

  @media ${({ theme }) => theme.breakpoints.tablet} {
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 4vh 0;
  }
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-bottom: 4vh;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 0;
  }
`;
const StyledListItem = styled.li`
  margin-right: 5vw;
  cursor: pointer;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    margin-left: 2vw;
    margin-right: 0;
  }
`;

const SocialNavigation = () => (
  <StyledWrapper>
    <Title footer>Dołącz do nas</Title>
    <StyledList>
      <StyledListItem>
        <Facebook />
      </StyledListItem>
      <StyledListItem>
        <Instagram />
      </StyledListItem>
      <StyledListItem>
        <Youtube />
      </StyledListItem>
      <StyledListItem>
        <Linkedin />
      </StyledListItem>
      <StyledListItem>
        <Twitter />
      </StyledListItem>
    </StyledList>
  </StyledWrapper>
);

export default SocialNavigation;
