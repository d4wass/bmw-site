import React from 'react';
import styled from 'styled-components';
import Title from 'components/atoms/Title';
import Paragraph from 'components/atoms/Paragraph';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;

  @media ${({ theme }) => theme.breakpoints.desktop} {
    width: 339px;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  line-height: 2.8rem;
`;
const StyledListItem = styled.li`
  display: flex;
  cursor: pointer;
`;

const StyledTitle = styled(Title)`
  padding-bottom: 30px;
`;

const SocialNavigation = ({ title, items }) => (
  <StyledWrapper>
    <StyledTitle footer>{title}</StyledTitle>
    <StyledList>
      {items.map((item) => (
        <StyledListItem>
          <Paragraph footer>{item}</Paragraph>
        </StyledListItem>
      ))}
    </StyledList>
  </StyledWrapper>
);

SocialNavigation.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SocialNavigation;
