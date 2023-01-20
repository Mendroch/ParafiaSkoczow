import React, { useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Category } from 'components/atoms/Category/Category';
import List from 'components/organisms/List/List';
import { ContentContext } from 'providers/ContentProvider';

const Titles = () => {
  const { setTextId, getCategory, getType } = useContext(ContentContext);

  return (
    <ViewWrapper>
      <Navigation type={getType()} />
      <Category>{getCategory()}</Category>
      <List nextPage={'/text'} setId={setTextId} />
    </ViewWrapper>
  );
};

export default Titles;