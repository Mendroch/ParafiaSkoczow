import styled from 'styled-components';

export const InputWrapper = styled.div`
  margin-bottom: 26px;
  display: flex;
  box-shadow: 0px 0px 22px 0px ${({ theme }) => theme.colors.blueLagoon};
`;

export const Input = styled.input`
  padding: 10px;
  height: 32px;
  width: 100%;
  border: none;
  outline: none;
  border-radius: 5px 0 0 5px;
`;

export const Button = styled.div`
  min-width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.tangerineYellow};
  border-radius: 0 5px 5px 0;

  svg {
    width: 17px;
    height: 17px;
  }
`;
