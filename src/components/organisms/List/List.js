import React, { useState, useEffect, useContext } from 'react';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';
import ListItem from 'components/molecules/ListItem/ListItem';
import { ContentContext } from 'providers/ContentProvider';

const List = ({ nextPage, setCategoryId }) => {
  const { getContent } = useContext(ContentContext);
  let content = getContent();

  return (
    <Wrapper>
      {content.map((elem) => (
        <ListItem
          elem={elem}
          address={nextPage}
          setCategoryId={setCategoryId}
          key={elem.id}
        />
      ))}
    </Wrapper>
  );
};

export default List;
