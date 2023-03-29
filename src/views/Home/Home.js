import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Wrapper,
  StyledImage,
  HeaderContainer,
  LinksContainer,
  Loading,
} from './Home.styles';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';
import { ReactComponent as LoadIcon } from 'assets/icons/load.svg';
import { ContentContext } from 'providers/ContentProvider';
import { getAnimationProps } from 'helpers/getAnimationProps';

const Home = () => {
  const { content, whetherOpenLoading, setType } = useContext(ContentContext);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { initial, animate, trasition, exit } = getAnimationProps();

  useEffect(() => {
    whetherOpenLoading() ? handleOpenModal() : handleCloseModal();
    // eslint-disable-next-line
  }, [content]);

  return (
    <Wrapper initial={initial} animate={animate} transition={trasition} exit={exit}>
      <HeaderContainer>
        <StyledImage />
        <h1>PARAFIA SKOCZÓW</h1>
      </HeaderContainer>
      <LinksContainer>
        <NavLink to="/playlist" onClick={() => setType('playlist')}>
          TEKSTY TERAZ
        </NavLink>
        <a
          href="https://www.youtube.com/watch?v=xSdIBGA0-7I&ab_channel=ParafiaSkocz%C3%B3w-transmisjaonline"
          target="_blank"
          rel="noopener noreferrer"
        >
          TRANSMISJA ONLINE
        </a>
        <NavLink to="/categories" onClick={() => setType('songs')}>
          PIEŚNI
        </NavLink>
        <NavLink to="/categories" onClick={() => setType('prayers')}>
          MODLITWY
        </NavLink>
        <NavLink to="/categories" onClick={() => setType('liturgy')}>
          LITURGIA
        </NavLink>
        <NavLink to="/text" onClick={() => setType('announcements')}>
          OGŁOSZENIA
        </NavLink>
        <NavLink to="/text" onClick={() => setType('intentions')}>
          INTENCJE MSZY
        </NavLink>
      </LinksContainer>
      <Modal isOpen={isOpen}>
        <Loading>
          <LoadIcon />
        </Loading>
      </Modal>
    </Wrapper>
  );
};

export default Home;
