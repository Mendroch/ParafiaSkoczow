import React, { useContext } from 'react';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import ListItem from 'components/molecules/ListItem/ListItem';
import { ContentContext } from 'providers/ContentProvider';

const List = ({ nextPage, setId }) => {
  const { getContent } = useContext(ContentContext);
  let content = getContent();

  return (
    <ContentWrapper>
      {content.map((elem) => (
        <ListItem elem={elem} address={nextPage} setId={setId} key={elem.id} />
      ))}
    </ContentWrapper>
  );
};

export default List;
