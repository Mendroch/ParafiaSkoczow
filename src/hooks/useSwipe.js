import { useContext } from 'react';
import { PlaylistContext } from 'providers/PlaylistProvider';

export const useSwipe = () => {
  const { currentSongIndex, playlist, setCurrentSongIndex, setAnimation } =
    useContext(PlaylistContext);

  const setId = (id) => {
    setAnimation('fadeInOut');
    setTimeout(() => setCurrentSongIndex(id), 100);
    setTimeout(() => setAnimation('none'), 200);
  };

  let initialX,
    initialY,
    touchX,
    touchY = 0;
  let isSwiped;
  const moves = {
    right: 'right',
    left: 'left',
    other: 'other',
  };
  let moveType = moves.other;

  const getXY = (e) => {
    touchX = e.touches[0].pageX;
    touchY = e.touches[0].pageY;
  };

  const swipeStart = (e) => {
    isSwiped = true;
    getXY(e);
    initialX = touchX;
    initialY = touchY;
  };

  const swipeMove = (e) => {
    if (e.touches.length > 1) isSwiped = false;
    if (isSwiped) {
      getXY(e);
      let diffX = touchX - initialX;
      let diffY = touchY - initialY;
      if (Math.abs(diffY) < Math.abs(diffX)) {
        moveType = diffX > 0 ? moves.right : moves.left;
      } else moveType = moves.other;
    }
  };

  const swipeEnd = (e) => {
    if (isSwiped) {
      if (moveType === moves.right && currentSongIndex > 0) {
        setId(currentSongIndex - 1);
      } else if (moveType === moves.left && currentSongIndex + 1 < playlist.length)
        setId(currentSongIndex + 1);
      isSwiped = false;
    }
  };

  return { swipeStart, swipeMove, swipeEnd };
};
