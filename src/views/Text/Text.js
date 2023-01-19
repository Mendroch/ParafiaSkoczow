import React, { useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Category } from 'components/atoms/Category/Category';
import { ContentContext } from 'providers/ContentProvider';
import { Wrapper, TextTitle, Content } from './Text.styles';

const Text = () => {
  const { getCategory, getType, getContent } = useContext(ContentContext);
  let content = getContent();

  const createContent = (content) => {
    return { __html: content };
  };

  return (
    <ViewWrapper>
      <Navigation type={getType()} />
      <Category>{getCategory()}</Category>
      <Wrapper>
        <TextTitle>{content.name}</TextTitle>
        <Content dangerouslySetInnerHTML={createContent(content.content)} />
      </Wrapper>
    </ViewWrapper>
  );
};

export default Text;
