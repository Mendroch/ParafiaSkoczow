import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Category } from 'components/atoms/Category/Category';
import { ContentContext } from 'providers/ContentProvider';
import {
  Wrapper,
  TextTitle,
  ButtonsWrapper,
  ButtonPrev,
  ButtonNext,
} from './Playlist.styles';
import { usePinching } from 'hooks/usePinching';
import { PlaylistContext } from 'providers/PlaylistProvider';
import { getAnimationProps } from 'helpers/getAnimationProps';
import { ReactComponent as PrevIcon } from 'assets/icons/arrowLeft.svg';
import { ReactComponent as NextIcon } from 'assets/icons/arrowRight.svg';
import { useSwipe } from 'hooks/useSwipe';

const createContent = (content) => {
  return { __html: content };
};

const Playlist = () => {
  const { getCategory, fontSize } = useContext(ContentContext);
  const { pinchingStart, pinchingMove, pinchingEnd } = usePinching();
  const { swipeStart, swipeMove, swipeEnd } = useSwipe();
  const { initial, animate, trasition, exit } = getAnimationProps();
  const { playlist, currentSongId, setCurrentSongId } = useContext(PlaylistContext);
  const navigate = useNavigate();

  return (
    <>
      {playlist.length ? (
        <ViewWrapper
          initial={initial}
          animate={animate}
          transition={trasition}
          exit={exit}
        >
          <Navigation type={'Teksty teraz'} noSearchLink={true} />
          <Category>{getCategory(playlist[currentSongId].category_id)}</Category>
          <Wrapper
            fontSize={fontSize}
            onTouchStart={(e) => {
              pinchingStart(e);
              swipeStart(e);
            }}
            onTouchMove={(e) => {
              pinchingMove(e);
              swipeMove(e);
            }}
            onTouchEnd={(e) => {
              pinchingEnd(e);
              swipeEnd(e);
            }}
          >
            <TextTitle>{playlist[currentSongId].name}</TextTitle>
            <p dangerouslySetInnerHTML={createContent(playlist[currentSongId].content)} />
          </Wrapper>
          <ButtonsWrapper>
            <ButtonPrev
              disabled={currentSongId - 1 < 0}
              isDisabled={currentSongId - 1 < 0}
              onClick={() => setCurrentSongId(currentSongId - 1)}
            >
              <PrevIcon />
              {currentSongId - 1 >= 0 ? (
                <p>{playlist[currentSongId - 1].name.slice(0, 15)}...</p>
              ) : null}
            </ButtonPrev>
            <ButtonNext
              disabled={currentSongId + 1 >= playlist.length}
              isDisabled={currentSongId + 1 >= playlist.length}
              onClick={() => setCurrentSongId(currentSongId + 1)}
            >
              {currentSongId + 1 < playlist.length ? (
                <p>{playlist[currentSongId + 1].name.slice(0, 18)}...</p>
              ) : null}
              <NextIcon />
            </ButtonNext>
          </ButtonsWrapper>
        </ViewWrapper>
      ) : (
        navigate('/')
      )}
    </>
  );
};

export default Playlist;
