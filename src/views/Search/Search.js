import React, { useState, useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import Navigation from 'components/organisms/Navigation/Navigation';
import List from 'components/organisms/List/List';
import { Button, Input, InputWrapper } from './Search.styles';
import { ContentContext } from 'providers/ContentProvider';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';
import { getAnimationProps } from 'helpers/getAnimationProps';

const Search = () => {
  const { setTextId, getType } = useContext(ContentContext);
  const [value, setValue] = useState('');
  const { initial, animate, trasition, exit } = getAnimationProps();

  return (
    <ViewWrapper initial={initial} animate={animate} transition={trasition} exit={exit}>
      <Navigation type={getType()} noSearchLink={true} />
      <InputWrapper>
        <Input
          placeholder="Szukaj"
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
        <Button>
          <SearchIcon />
        </Button>
      </InputWrapper>
      <List
        nextPage={'/text'}
        setId={setTextId}
        isDefectiveView={true}
        inputValue={value}
      />
    </ViewWrapper>
  );
};

export default Search;
