import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Group, BackButton, StyledLink, Icon } from './Navigation.styles';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import icon from 'assets/icons/arrowLeft.svg';

const Navigation = ({ type, noSearchLink }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Group>
        <BackButton onClick={() => navigate(-1)}>
          <Icon src={icon} alt={'arrow icon'} />
        </BackButton>
        <p>{type}</p>
      </Group>
      {!noSearchLink && type !== 'Liturgia' ? (
        <StyledLink to="/search">
          <SearchIcon />
        </StyledLink>
      ) : null}
    </Wrapper>
  );
};

export default Navigation;
