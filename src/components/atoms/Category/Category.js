import styled from 'styled-components';

export const Category = styled.div`
  padding: 5px 17px 0 17px;
  min-height: 37px;
  border-radius: 8px 8px 0 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: 'FiraSansMedium';
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blueLagoon};
  overflow-x: scroll;
  white-space: nowrap;
`;