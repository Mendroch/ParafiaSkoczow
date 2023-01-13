import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  font-size: ${({ theme }) => theme.fontSize.m};

  &:not(:last-of-type) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
  }
`;
