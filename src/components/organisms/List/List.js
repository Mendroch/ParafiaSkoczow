import React, { useState, useEffect, useContext } from 'react';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import ListItem from 'components/molecules/ListItem/ListItem';
import { ContentContext } from 'providers/ContentProvider';

const List = ({ nextPage, setId, isDefectiveView, inputValue }) => {
  const { getContent } = useContext(ContentContext);
  const [content] = useState(getContent());
  const [searchedContent, setSearchedContent] = useState(content);

  useEffect(() => {
    if (inputValue) {
      setSearchedContent(
        content
          .filter(
            (text) =>
              text.name.toLowerCase().includes(inputValue.toLowerCase()) ||
              text.content.toLowerCase().includes(inputValue.toLowerCase())
          )
          .sort((a, b) => {
            let itA = a.name.toLowerCase().includes(inputValue.toLowerCase());
            let itB = b.name.toLowerCase().includes(inputValue.toLowerCase());

            return itA && !itB ? -1 : !itB && itA ? 1 : 0;
          })
      );
    }
    // eslint-disable-next-line
  }, [inputValue]);

  return (
    <ContentWrapper isDefectiveView={isDefectiveView}>
      {searchedContent.map((elem) => (
        <ListItem elem={elem} address={nextPage} setId={setId} key={elem.id} />
      ))}
    </ContentWrapper>
  );
};

export default List;
