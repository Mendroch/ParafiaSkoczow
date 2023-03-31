import React, { useContext } from 'react';
import { ButtonNext, ButtonPrev, Wrapper } from './PlaylistNavigation.styles';
import { ReactComponent as PrevIcon } from 'assets/icons/arrowLeft.svg';
import { ReactComponent as NextIcon } from 'assets/icons/arrowRight.svg';
import { PlaylistContext } from 'providers/PlaylistProvider';

const PlaylistNavigation = () => {
  const { playlist, currentSongId, animation, setCurrentSongId, setAnimation } =
    useContext(PlaylistContext);

  const setId = (id) => {
    setAnimation('fadeInOut');
    setTimeout(() => setCurrentSongId(id), 100);
    setTimeout(() => setAnimation('none'), 200);
  };

  return (
    <Wrapper animationName={animation}>
      <ButtonPrev
        disabled={currentSongId - 1 < 0}
        isDisabled={currentSongId - 1 < 0}
        onClick={() => setId(currentSongId - 1)}
      >
        <PrevIcon />
        {currentSongId - 1 >= 0 ? (
          <p>{playlist[currentSongId - 1].name.slice(0, 15)}...</p>
        ) : null}
      </ButtonPrev>
      <ButtonNext
        disabled={currentSongId + 1 >= playlist.length}
        isDisabled={currentSongId + 1 >= playlist.length}
        onClick={() => setId(currentSongId + 1)}
      >
        {currentSongId + 1 < playlist.length ? (
          <p>{playlist[currentSongId + 1].name.slice(0, 18)}...</p>
        ) : null}
        <NextIcon />
      </ButtonNext>
    </Wrapper>
  );
};

export default PlaylistNavigation;
