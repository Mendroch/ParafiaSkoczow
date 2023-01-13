import styled from 'styled-components';

export const Category = styled.div`
  padding: 3px 17px 0 17px;
  height: 41px;
  border-radius: 8px 8px 0 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blueLagoon};
  overflow-x: scroll;
  white-space: nowrap;
`;
