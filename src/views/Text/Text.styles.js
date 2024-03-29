import styled from 'styled-components';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';

export const Wrapper = styled(ContentWrapper)`
  padding: 0 17px;
  border-radius: ${({ isDefectiveView }) => (isDefectiveView ? '8px' : 'null')};
  line-height: 1.4;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-family: 'FiraSansMedium';
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong,
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
