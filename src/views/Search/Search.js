import React, { useState, useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import Navigation from 'components/organisms/Navigation/Navigation';
import List from 'components/organisms/List/List';
import { Button, Input, InputWrapper } from './Search.styles';
import { ContentContext } from 'providers/ContentProvider';
import { ReactComponent as SearchIcon } from 'assets/icons/search.svg';

const Search = () => {
  const { setTextId, getType } = useContext(ContentContext);
  const [value, setValue] = useState('');

  return (
    <ViewWrapper>
      <Navigation type={getType()} noSearchLink={true} />
      <InputWrapper>
        <Input placeholder="Szukaj" onChange={(e) => setValue(e.target.value)} />
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
