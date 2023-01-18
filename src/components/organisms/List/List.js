import React, { useContext } from 'react';
import { Wrapper } from 'components/atoms/Wrapper/Wrapper';
import ListItem from 'components/molecules/ListItem/ListItem';
import { ContentContext } from 'providers/ContentProvider';

const List = () => {
  const { getContent } = useContext(ContentContext);
  let content = getContent();

  return (
    <Wrapper>
      {content.map((elem) => (
        <ListItem text={elem.name} key={elem.id} />
      ))}
    </Wrapper>
  );
};

export default List;
