import React from 'react';
import { Wrapper } from './ListItem.styles';

const ListItem = ({ elem, address, setCategoryId }) => {
  return (
    <Wrapper to={address} onClick={() => setCategoryId(elem.id)}>
      {elem.name}
    </Wrapper>
  );
};

export default ListItem;
