import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;

  button {
    padding: 17px 0 0 0;
    width: 50%;
    height: 55px;
    display: flex;
    align-items: center;
    border: none;
    background: rgba(0, 0, 0, 0);

    svg {
      width: 25px;
      height: 35px;
    }

    p {
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fontSize.m};
      font-family: 'FiraSansMedium';
      animation: ${({ animationName }) => animationName} 0.2s ease-in-out;
    }

    @keyframes fadeInOut {
      50% {
        opacity: 0;
      }
    }
  }
`;

export const ButtonPrev = styled.button`
  opacity: ${({ isDisabled }) => (isDisabled ? '0.5' : '1')};

  p {
    margin-left: 5px;
  }
`;

export const ButtonNext = styled.button`
  opacity: ${({ isDisabled }) => (isDisabled ? '0.5' : '1')};
  justify-content: flex-end;

  p {
    margin-right: 5px;
  }
`;
