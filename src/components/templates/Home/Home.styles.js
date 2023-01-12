import styled from 'styled-components';
import { ReactComponent as AppIcon } from 'assets/icons/icon.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledImage = styled(AppIcon)`
  width: 114px;
  height: 114px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 16px;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const LinksContainer = styled.div`
  width: 76%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 222px);
  overflow: scroll;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;
    font-weight: 600;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.white};
    border-radius: 28px;
    text-decoration: none;

    &:not(:last-of-type) {
      margin-bottom: 15px;
    }
  }
`;
