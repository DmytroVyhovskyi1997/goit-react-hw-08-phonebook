
import styled from "styled-components";
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
export const Li = styled.li`
font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.02em;
    display:flex;
    align-items:center;
    
`

export const P = styled.p`
padding-right:50px;
padding-left:30px;
font-size:32px;
margin:0;
color:moccasin;
`

export const Span = styled.span`
color: aqua;
`