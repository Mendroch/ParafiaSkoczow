import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Group, BackButton, StyledLink } from './Navigation.styles';
import { ReactComponent as BackIcon } from 'assets/icons/arrow.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

const Navigation = ({ type, noSearchLink }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Group>
        <BackButton onClick={() => navigate(-1)}>
          <BackIcon />
        </BackButton>
        <p>{type}</p>
      </Group>
      {!noSearchLink ? (
        <StyledLink to="/search">
          <SearchIcon />
        </StyledLink>
      ) : null}
    </Wrapper>
  );
};

export default Navigation;
