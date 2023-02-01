import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 32px;
`;

export const Group = styled.div`
  position: relative;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: 'FiraSansRegular';

  p {
    margin-top: 0px;
    margin-left: 40px;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: -7.5px;
  left: -7.5px;
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;

  svg {
    width: 24px;
    height: 24px;
  }
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
