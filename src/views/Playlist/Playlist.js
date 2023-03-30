import React, { useState, useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Category } from 'components/atoms/Category/Category';
import { ContentContext } from 'providers/ContentProvider';
import {
  Wrapper,
  TextTitle,
  ButtonsWrapper,
  ButtonPrev,
  ButtonNext,
} from './Playlist.styles';
import { useTouch } from 'hooks/useTouch';
import { getAnimationProps } from 'helpers/getAnimationProps';
import { ReactComponent as PrevIcon } from 'assets/icons/arrowLeft.svg';
import { ReactComponent as NextIcon } from 'assets/icons/arrowRight.svg';

const createContent = (content) => {
  return { __html: content };
};

const Playlist = () => {
  //   const { getCategory, getContent, fontSize } = useContext(ContentContext);
  //   const [content] = useState(getContent());
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
      <Navigation type={'Teksty teraz'} noSearchLink={true} />
      <Category>{'To jest kategoria'}</Category>
      {/* <Category>{getCategory()}</Category> */}
      <Wrapper fontSize={'15px'}>
        <TextTitle>{'To jest tytuł tekstu'}</TextTitle>
        {/* <TextTitle>{content.name}</TextTitle> */}
        <p
          dangerouslySetInnerHTML={createContent(
            'To jest treść tekstu blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla blablabla'
          )}
        />
      </Wrapper>
      <ButtonsWrapper>
        <ButtonPrev>
          <PrevIcon />
          <p>Tytuł</p>
        </ButtonPrev>
        <ButtonNext>
          <p>Tytuł</p>
          <NextIcon />
        </ButtonNext>
      </ButtonsWrapper>
    </ViewWrapper>
  );
};

export default Playlist;
