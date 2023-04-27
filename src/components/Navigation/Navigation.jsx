import { useAuth } from 'hooks/useAuth';
import {StyledLink} from './Navigation.styled'

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return(
    <nav>
    <ul>
        <li>
        <StyledLink to='/'>Home</StyledLink>
        </li>
        {isLoggedIn && (
            <li>
            <StyledLink to='/contacts'>Log in</StyledLink>
            </li>
        )}
        
    </ul>
</nav> 
    )
}