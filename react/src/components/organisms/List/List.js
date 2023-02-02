import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import ListItem from 'components/molecules/ListItem/ListItem';
import { ContentContext } from 'providers/ContentProvider';
import searchContent from 'helpers/searchContent';

const List = ({ nextPage, setId, isDefectiveView, inputValue }) => {
  const { getContent } = useContext(ContentContext);
  const [content] = useState(getContent());
  const [searchedContent, setSearchedContent] = useState(content);
  let location = useLocation().pathname;

  useEffect(() => {
    if (inputValue) {
      setSearchedContent(searchContent(inputValue, content));
    }
  }, [inputValue, content]);

  // console.log(content[1].content);

  return (
    <ContentWrapper isDefectiveView={isDefectiveView}>
      {content[0].content && location === '/categories'
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