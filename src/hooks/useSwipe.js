import { useContext } from 'react';
import { PlaylistContext } from 'providers/PlaylistProvider';

export const useSwipe = () => {
  const { currentSongId, playlist, setCurrentSongId } = useContext(PlaylistContext);
  let initialX,
    initialY,
    touchX,
    touchY = 0;
  let isSwiped;
  let moveType = '';

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
        moveType = diffX > 0 ? 'Right' : 'Left';
      } else moveType = 'Other';
    }
  };

  const swipeEnd = (e) => {
    if (isSwiped) {
      if (moveType === 'Right' && currentSongId > 0) {
        setCurrentSongId(currentSongId - 1);
      } else if (moveType === 'Left' && currentSongId + 1 < playlist.length)
        setCurrentSongId(currentSongId + 1);
      isSwiped = false;
    }
  };

  return { swipeStart, swipeMove, swipeEnd };
};
