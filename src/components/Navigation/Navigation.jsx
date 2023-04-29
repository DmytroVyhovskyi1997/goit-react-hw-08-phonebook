import { useAuth } from 'hooks/useAuth';
import {Li, P, Span, StyledLink, Ul} from './Navigation.styled'

export const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return(
    <nav>
    <Ul>
        
        <Li>
        <P>Phone<Span>Book</Span></P>
        <StyledLink to='/'>Home</StyledLink>
        </Li>
        {isLoggedIn && (
            <Li>
            <StyledLink to='/contacts'>Contacts</StyledLink>
            </Li>
        )}
        
    </Ul>
</nav> 
    )
}