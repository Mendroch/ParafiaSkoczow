import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import { ContentContext } from 'providers/ContentProvider';
import { Wrapper, TextTitle, Text, StyledCategory } from './Playlist.styles';
import { usePinching } from 'hooks/usePinching';
import { PlaylistContext } from 'providers/PlaylistProvider';
import { getAnimationProps } from 'helpers/getAnimationProps';
import { useSwipe } from 'hooks/useSwipe';
import PlaylistNavigation from 'components/molecules/PlaylistNavigation/PlaylistNavigation';
import Navigation from 'components/organisms/Navigation/Navigation';

const createContent = (content) => {
  return { __html: content };
};

const Playlist = () => {
  const { getPlaylistCategory, fontSize } = useContext(ContentContext);
  const { pinchingStart, pinchingMove, pinchingEnd } = usePinching();
  const { swipeStart, swipeMove, swipeEnd } = useSwipe();
  const { initial, animate, trasition, exit } = getAnimationProps();
  const { playlist, currentSongIndex, animation, setCurrentSongIndex } =
    useContext(PlaylistContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!playlist.length) navigate('/');
    setCurrentSongIndex(0);
    // eslint-disable-next-line
  }, [playlist]);

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
          <StyledCategory animationName={animation}>
            <p>
              {getPlaylistCategory(
                playlist[currentSongIndex].type,
                playlist[currentSongIndex].category_id
              )}
            </p>
          </StyledCategory>
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
            <TextTitle animationName={animation}>
              {playlist[currentSongIndex].name}
            </TextTitle>
            <Text
              animationName={animation}
              dangerouslySetInnerHTML={createContent(playlist[currentSongIndex].content)}
            />
          </Wrapper>
          <PlaylistNavigation />
        </ViewWrapper>
      ) : null}
    </>
  );
};

export default Playlist;
