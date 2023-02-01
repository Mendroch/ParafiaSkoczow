import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import ListItem from 'components/molecules/ListItem/ListItem';
import { ContentContext } from 'providers/ContentProvider';

const List = ({ nextPage, setId, isDefectiveView, inputValue }) => {
  const { getContent, setIsBackHistory } = useContext(ContentContext);
  const [content] = useState(getContent());
  const [searchedContent, setSearchedContent] = useState(content);
  let location = useLocation().pathname;

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
    <ContentWrapper
      isDefectiveView={isDefectiveView}
      onClick={() => setIsBackHistory(false)}
    >
      {content[0].content && location.pathname === '/categories'
        ? searchedContent.map((elem) =>
            elem.content !== '<p>---</p>' ? (
              <ListItem elem={elem} address={'/text'} setId={setId} key={elem.id} />
            ) : (
              <ListItem elem={elem} address={nextPage} setId={setId} key={elem.id} />
            )
          )
        : searchedContent.map((elem) => (
            <ListItem elem={elem} address={nextPage} setId={setId} key={elem.id} />
          ))}
    </ContentWrapper>
  );
};

export default List;
