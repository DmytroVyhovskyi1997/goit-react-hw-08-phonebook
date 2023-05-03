import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
@media  screen and (max-width:768px){
display:flex;
margin-bottom: 5px;
margin-right: 20px;
}
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.02em;
  margin-right: 100px;
  padding-bottom: 7px;
 
  position: relative;
  &.active {
    color: red;
    &::after,
    hover {
      content: '';
      position: absolute;
      padding-top: 5px;
      width: 100%;
      left: 0;
      bottom: 0;
      background-color: red;
      border-radius: 2px;
    }
  }
`;
