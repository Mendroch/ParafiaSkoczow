import React from 'react';
import { Wrapper } from './Categories.styles';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Category } from 'components/atoms/Wrapper/Category/Category';
import List from 'components/organisms/List/List';

const Categories = () => {
  return (
    <Wrapper>
      <Navigation />
      <Category>Kategorie</Category>
      <List />
    </Wrapper>
  );
};

export default Categories;
