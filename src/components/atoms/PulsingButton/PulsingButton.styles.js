import styled from 'styled-components';

export const OuterWrapper = styled.div`
  position: absolute;
  top: 25px;
  right: 75px;
`;

export const InnerWrapper = styled.div`
  position: relative;
`;

export const Circle = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.potteryBlue};
  opacity: 0;
  animation: scaleIn 3s infinite ease-in-out;
  animation-delay: ${(props) => props.delay};

  @keyframes scaleIn {
    from {
      transform: scale(0.9, 0.9);
      opacity: 0.5;
    }
    to {
      transform: scale(2, 2);
      opacity: 0;
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: ${({ theme }) => theme.colors.potteryBlue};

  svg {
    width: 30px;
  }
`;
