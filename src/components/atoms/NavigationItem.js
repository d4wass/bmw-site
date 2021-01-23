import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledListItem = styled.li`
  padding: 20px 0;
  width: 100%;
  list-style: none;
  margin-bottom: 30px;
  border-bottom: solid 1px #343434;
  display: flex;
  justify-content: center;
`;

const StyledListItemLink = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Cairo', sans-serif;
  font-size: 1.6rem;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

const NavigationItem = ({ children }) => (
  <StyledListItem>
    <StyledListItemLink to="#">{children}</StyledListItemLink>
  </StyledListItem>
);

NavigationItem.propTypes = {
  children: PropTypes.string.isRequired,
};

export default NavigationItem;
