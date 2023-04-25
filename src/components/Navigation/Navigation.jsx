import {StyledLink} from './Navigation.styled'

export const Navigation = () => {
    return(
    <nav>
    <ul>
        <li>
        <StyledLink to='/'>Home</StyledLink>
        </li>
        <li>
        <StyledLink to='/login'>Log in</StyledLink>
        </li>
        <li>
        <StyledLink to='/logout'>Log out</StyledLink>
        </li>
        
    </ul>
</nav> 
    )
}