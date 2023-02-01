import styled from 'styled-components';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';

export const Wrapper = styled(ContentWrapper)`
  padding: 17px;
  border-radius: ${({ isDefectiveView }) => (isDefectiveView ? '8px' : 'null')};
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
