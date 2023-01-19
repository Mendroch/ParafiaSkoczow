import React, { useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Category } from 'components/atoms/Category/Category';
import List from 'components/organisms/List/List';
import { ContentContext } from 'providers/ContentProvider';

const Categories = () => {
  const { setCategoryId, getType } = useContext(ContentContext);

  return (
    <ViewWrapper>
      <Navigation type={getType()} />
      <Category>Kategorie</Category>
      <List nextPage={'/titles'} setId={setCategoryId} />
    </ViewWrapper>
  );
};

export default Categories;
