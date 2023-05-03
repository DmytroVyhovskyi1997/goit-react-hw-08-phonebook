import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: white;
  padding-bottom: 5px;
  position: relative;

  &.active {
    color: red;
    &::after,
    hover {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      left: 0;
      bottom: 0;
      background-color: red;
      border-radius: 2px;
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  @media  screen and (max-width:768px){
    padding-left:5px;
  }
  
`;
export const Li = styled.li`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
`;
export const P = styled.p`
@media  screen and (max-width:768px){
  padding-left: 0;

}
  padding-right: 50px;
  padding-bottom: 5px;
  padding-left: 30px;
  font-size: 32px;
  margin: 0;
  color: moccasin;
`;

export const Span = styled.span`
  color: aqua;
`;
