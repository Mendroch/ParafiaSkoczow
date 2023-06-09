import styled from 'styled-components';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import { Category } from 'components/atoms/Category/Category';

export const Wrapper = styled(ContentWrapper)`
  padding: 0 17px;
  line-height: 1.4;

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

  @keyframes fadeInOut {
    50% {
      opacity: 0;
    }
  }
`;

export const StyledCategory = styled(Category)`
  p {
    animation: ${({ animationName }) => animationName} 0.2s ease-in-out;
  }
`;

export const TextTitle = styled.p`
  margin-bottom: 11px;
  font-family: 'FiraSansBold';
  animation: ${({ animationName }) => animationName} 0.2s ease-in-out;
`;

export const Text = styled.p`
  animation: ${({ animationName }) => animationName} 0.2s ease-in-out;
`;
