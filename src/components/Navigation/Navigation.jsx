import Notiflix from 'notiflix';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { Li, P, Span, StyledLink, Ul } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn === true) {
      return Notiflix.Notify.success(`Wellcome back `);
    }
  }, [isLoggedIn]);

  return (
    <nav>
      <Ul>
        <Li>
          <P>
            Phone<Span>Book</Span>
          </P>
          <StyledLink to="/">Home</StyledLink>
        </Li>
        {isLoggedIn && (
          <Li>
            <StyledLink to="/contacts">Contacts</StyledLink>
          </Li>
        )}
      </Ul>
    </nav>
  );
};
