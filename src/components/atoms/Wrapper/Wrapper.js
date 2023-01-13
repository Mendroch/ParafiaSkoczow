import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5px 17px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0 0 8px 8px;
  overflow-y: scroll;
`;
