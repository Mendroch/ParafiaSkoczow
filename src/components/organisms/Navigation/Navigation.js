import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Group, BackButton, StyledLink } from './Navigation.styles';
import { ReactComponent as BackIcon } from 'assets/icons/arrow.svg';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { ContentContext } from 'providers/ContentProvider';

const Navigation = ({ type, noSearchLink }) => {
  const { setIsBackHistory } = useContext(ContentContext);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Group>
        <BackButton onClick={() => navigate(-1)}>
          <BackIcon />
        </BackButton>
        <p>{type}</p>
      </Group>
      {!noSearchLink && type !== 'Liturgia' ? (
        <StyledLink to="/search" onClick={() => setIsBackHistory(false)}>
          <SearchIcon />
        </StyledLink>
      ) : null}
    </Wrapper>
  );
};

export default Navigation;
