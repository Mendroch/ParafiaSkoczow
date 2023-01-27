import React, { useState, useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Category } from 'components/atoms/Category/Category';
import List from 'components/organisms/List/List';
import { ContentContext } from 'providers/ContentProvider';

const Titles = () => {
  const { setTextId, getCategory, getType, getIsBackHistory } =
    useContext(ContentContext);
  const [isBackHistory] = useState(getIsBackHistory());

  const getProps = (value) => {
    if ((value && !isBackHistory) || (!value && isBackHistory)) return '100%';
    if ((value && isBackHistory) || (!value && !isBackHistory)) return '-100%';
  };

  return (
    <ViewWrapper
      initial={{ x: getProps(true), width: '100%' }}
      animate={{ x: 0, width: '100%' }}
      transition={{ animation: 'linear' }}
      exit={{
        x: getProps(false),
        transition: { duration: 0.3, animation: 'linear' },
      }}
    >
      <Navigation type={getType()} />
      <Category>{getCategory()}</Category>
      <List nextPage={'/text'} setId={setTextId} />
    </ViewWrapper>
  );
};

export default Titles;
