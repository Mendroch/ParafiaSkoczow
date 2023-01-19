import React, { useContext } from 'react';
import { Wrapper } from './Categories.styles';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Category } from 'components/atoms/Wrapper/Category/Category';
import List from 'components/organisms/List/List';
import { ContentContext } from 'providers/ContentProvider';

const Categories = () => {
  const { setCategoryId, getType } = useContext(ContentContext);

  return (
    <Wrapper>
      <Navigation type={getType()} />
      <Category>Kategorie</Category>
      <List nextPage={'/titles'} setCategoryId={setCategoryId} />
    </Wrapper>
  );
};

export default Categories;
