import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.bateau} 0%,
    ${({ theme }) => theme.colors.potteryBlue} 100%
  );
  overflow: hidden;
`;
