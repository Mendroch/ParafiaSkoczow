import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper, StyledImage, HeaderContainer, LinksContainer } from './Home.styles';

const Home = () => {
  return (
    <Wrapper>
      <HeaderContainer>
        <StyledImage />
        <h1>PARAFIA SKOCZÓW</h1>
      </HeaderContainer>
      <LinksContainer>
        <a
          href="https://www.youtube.com/watch?v=xSdIBGA0-7I&ab_channel=ParafiaSkocz%C3%B3w-transmisjaonline"
          target="_blank"
          rel="noopener noreferrer"
        >
          TRANSMISJA ONLINE
        </a>
        <NavLink to="/categories">PIEŚNI</NavLink>
        <NavLink to="/categories">MODLITWY</NavLink>
        <NavLink>LITURGIA</NavLink>
        <NavLink>OGŁOSZENIA</NavLink>
        <NavLink>INTENCJE MSZY</NavLink>
      </LinksContainer>
    </Wrapper>
  );
};

export default Home;
