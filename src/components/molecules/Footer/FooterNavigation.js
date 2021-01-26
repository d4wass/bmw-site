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
    width: 25%;
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
const StyledAnchor = styled.a`
  transition: all ease-in 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const StyledTitle = styled(Title)`
  padding-bottom: 4vh;
`;

const SocialNavigation = ({ title, items }) => (
  <StyledWrapper>
    <StyledTitle footer>{title}</StyledTitle>
    <StyledList>
      {items.map((item) => (
        <StyledListItem>
          <Paragraph footer as={StyledAnchor}>
            {item}
          </Paragraph>
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
