import styled from 'styled-components';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';

export const Wrapper = styled(ContentWrapper)`
  padding: 17px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  div,
  span {
    font-size: ${({ fontSize }) => fontSize};
  }
`;

export const TextTitle = styled.p`
  margin-bottom: 11px;
  font-family: 'FiraSansBold';
`;

export const ButtonsWrapper = styled.div`
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
      margin-top: 0;
      color: ${({ theme }) => theme.colors.white};
      font-size: ${({ theme }) => theme.fontSize.m};
      font-family: 'FiraSansMedium';
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
