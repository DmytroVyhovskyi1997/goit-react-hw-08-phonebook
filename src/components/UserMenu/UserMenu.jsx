import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperation';
import { useAuth } from 'hooks/useAuth';
import { Box, Button, Span, Title } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box>
      <Title>
        Welcome,<Span> {user.name}</Span>{' '}
      </Title>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Box>
  );
};
