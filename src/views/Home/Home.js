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

const Home = () => {
  const { content, whetherOpenLoading, setType, setIsBackHistory } =
    useContext(ContentContext);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    whetherOpenLoading() ? handleOpenModal() : handleCloseModal();
    // eslint-disable-next-line
  }, [content]);

  return (
    <Wrapper
      initial={{ scale: 0.9, width: '100%', opacity: 0 }}
      animate={{ scale: 1, width: '100%', opacity: 1 }}
      transition={{ delay: 0.3, animation: 'linear' }}
      exit={{
        scale: 1.1,
        opacity: 0,
        transition: { duration: 0.2, animation: 'linear' },
      }}
    >
      <HeaderContainer>
        <StyledImage />
        <h1>PARAFIA SKOCZÓW</h1>
      </HeaderContainer>
      <LinksContainer onClick={() => setIsBackHistory(false)}>
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
