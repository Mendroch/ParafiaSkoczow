import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-bottom: 17px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 32px;
`;

export const Group = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: 'FiraSansRegular';
  height: 100%;

  p {
    margin-left: 40px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: -4px;
  left: -7.5px;
  width: 40px;
  height: 40px;
  background: transparent;
  border: none;
`;

export const StyledLink = styled(NavLink)`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.tangerineYellow};
  border-radius: 5px;

  svg {
    width: 17px;
    height: 17px;
  }
`;

export const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
