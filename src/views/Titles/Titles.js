import React, { useContext } from 'react';
import { Wrapper } from './Titles.styles';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Category } from 'components/atoms/Wrapper/Category/Category';
import List from 'components/organisms/List/List';
import { ContentContext } from 'providers/ContentProvider';

const Titles = () => {
  const { setTextId, getCategory, getType } = useContext(ContentContext);

  return (
    <Wrapper>
      <Navigation type={getType()} />
      <Category>{getCategory()}</Category>
      <List nextPage={'/text'} />
      {/* <List nextPage={'/text'} setCategoryId={setTextId} /> */}
    </Wrapper>
  );
};

export default Titles;
