import React, { useContext } from 'react';
import { ButtonNext, ButtonPrev, Wrapper } from './PlaylistNavigation.styles';
import { ReactComponent as PrevIcon } from 'assets/icons/arrowLeft.svg';
import { ReactComponent as NextIcon } from 'assets/icons/arrowRight.svg';
import { PlaylistContext } from 'providers/PlaylistProvider';

const PlaylistNavigation = () => {
  const { playlist, currentSongIndex, animation, setCurrentSongIndex, setAnimation } =
    useContext(PlaylistContext);

  const setId = (id) => {
    setAnimation('fadeInOut');
    setTimeout(() => setCurrentSongIndex(id), 100);
    setTimeout(() => setAnimation('none'), 200);
  };

  return (
    <Wrapper animationName={animation}>
      <ButtonPrev
        disabled={currentSongIndex - 1 < 0}
        isDisabled={currentSongIndex - 1 < 0}
        onClick={() => setId(currentSongIndex - 1)}
      >
        <PrevIcon />
        {currentSongIndex - 1 >= 0 ? (
          <p>{playlist[currentSongIndex - 1].name.slice(0, 15)}...</p>
        ) : (
          <p></p>
        )}
      </ButtonPrev>
      <ButtonNext
        disabled={currentSongIndex + 1 >= playlist.length}
        isDisabled={currentSongIndex + 1 >= playlist.length}
        onClick={() => setId(currentSongIndex + 1)}
      >
        {currentSongIndex + 1 < playlist.length ? (
          <p>{playlist[currentSongIndex + 1].name.slice(0, 18)}...</p>
        ) : (
          <p></p>
        )}
        <NextIcon />
      </ButtonNext>
    </Wrapper>
  );
};

export default PlaylistNavigation;
