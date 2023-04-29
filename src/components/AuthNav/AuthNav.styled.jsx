import styled from "styled-components"
import {NavLink} from "react-router-dom";

export const StyledLink = styled(NavLink)`
color: white;
&.active{
    color:red;
} 
 `

export const Ul = styled.ul`
display:flex;
`
