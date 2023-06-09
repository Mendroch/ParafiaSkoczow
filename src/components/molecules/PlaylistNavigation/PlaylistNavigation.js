import React, { useContext } from 'react';
import { ButtonNext, ButtonPrev, Icon, Wrapper } from './PlaylistNavigation.styles';
import { PlaylistContext } from 'providers/PlaylistProvider';
import iconLeft from 'assets/icons/arrowLeft.svg';
import iconRight from 'assets/icons/arrowRight.svg';

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
        <Icon src={iconLeft} alt={'arrow icon'} />
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
        <Icon src={iconRight} alt={'arrow icon'} />
      </ButtonNext>
    </Wrapper>
  );
};

export default PlaylistNavigation;
