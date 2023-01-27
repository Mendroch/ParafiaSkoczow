import React, { useState, useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Category } from 'components/atoms/Category/Category';
import List from 'components/organisms/List/List';
import { ContentContext } from 'providers/ContentProvider';

const Categories = () => {
  const { setCategoryId, getType, getIsBackHistory } = useContext(ContentContext);
  const [isBackHistory] = useState(getIsBackHistory());

  const getProps = (value) => {
    switch (value) {
      case 'initial':
        if (!isBackHistory) return { scale: 0.9, width: '100%', opacity: 0 };
        else return { x: '-100%', width: '100%' };
      case 'animate':
        if (!isBackHistory) return { scale: 1, width: '100%', opacity: 1 };
        else return { x: 0, width: '100%' };
      case 'exit':
        if (!isBackHistory)
          return {
            x: '-100%',
            transition: { duration: 0.3, animation: 'linear' },
          };
        else
          return {
            scale: 1.1,
            opacity: 0,
            transition: { duration: 0.3, animation: 'linear' },
          };
      default:
        return null;
    }
  };

  return (
    <ViewWrapper
      initial={getProps('initial')}
      animate={getProps('animate')}
      transition={{ animation: 'linear' }}
      exit={getProps('exit')}
    >
      <Navigation type={getType()} />
      <Category>Kategorie</Category>
      <List nextPage={'/titles'} setId={setCategoryId} />
    </ViewWrapper>
  );
};

export default Categories;
