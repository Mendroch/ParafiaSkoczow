import React, { useState, useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Category } from 'components/atoms/Category/Category';
import { ContentContext } from 'providers/ContentProvider';
import { Wrapper, TextTitle, Content } from './Text.styles';
import { useTouch } from 'hooks/useTouch';
import { getAnimationProps } from 'helpers/getAnimationProps';

const createContent = (content) => {
  return { __html: content };
};

const checkLocation = (type) => {
  return type === 'Ogłoszenia' || type === 'Intencje mszalne';
};

const Text = () => {
  const { getCategory, getType, getContent, fontSize } = useContext(ContentContext);
  const [content] = useState(getContent());
  const [isDefectiveView] = useState(checkLocation(getType()));
  const { touchStart, touchMove, touchEnd } = useTouch();
  const { initial, animate, trasition, exit } = getAnimationProps();

  return (
    <ViewWrapper
      initial={initial}
      animate={animate}
      transition={trasition}
      exit={exit}
      onTouchStart={(e) => touchStart(e)}
      onTouchMove={(e) => touchMove(e)}
      onTouchEnd={(e) => touchEnd(e)}
    >
      <Navigation type={getType()} noSearchLink={true} />
      {!isDefectiveView ? <Category>{getCategory()}</Category> : null}
      <Wrapper isDefectiveView={isDefectiveView}>
        {isDefectiveView ? null : content.name !== getCategory() ? (
          <TextTitle>{content.name}</TextTitle>
        ) : null}
        <Content
          dangerouslySetInnerHTML={createContent(content.content)}
          fontSize={fontSize}
        />
      </Wrapper>
    </ViewWrapper>
  );
};

export default Text;
