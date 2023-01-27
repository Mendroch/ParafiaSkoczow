import { useEffect, useReducer } from 'react';
import { theme as startTheme } from './theme';
import { setToLS, getFromLS } from 'utils/storage';

const reducer = (state, action) => {
  return {
    ...state,
    fontSize: {
      ...state.fontSize,
      // eslint-disable-next-line
      ['text']: action.value,
    },
  };
};

export const useTheme = () => {
  const [theme, dispatch] = useReducer(reducer, startTheme);

  useEffect(() => {
    let value = getFromLS('textSize');
    let textSize = typeof value === 'object' ? '15px' : value;
    dispatch({
      value: textSize,
    });
  }, []);

  const setFontSize = (size) => {
    dispatch({
      value: size,
    });
  };

  const saveFontSize = (size) => {
    setToLS('textSize', size);
  };

  return { theme, setFontSize, saveFontSize };
};
