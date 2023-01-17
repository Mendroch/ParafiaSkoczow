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
  const { content, whetherOpenLoading } = useContext(ContentContext);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => {
    whetherOpenLoading() ? handleOpenModal() : handleCloseModal();
    // eslint-disable-next-line
  }, [content]);

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
      <Modal isOpen={isOpen}>
        <Loading>
          <LoadIcon />
        </Loading>
      </Modal>
    </Wrapper>
  );
};

export default Home;
