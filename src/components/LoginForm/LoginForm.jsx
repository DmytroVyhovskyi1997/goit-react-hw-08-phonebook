import { logIn } from 'redux/auth/authOperation';
import { useDispatch } from 'react-redux';
import { Button, Div, Form, Input, Label } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <Div>
          <Input type="email" name="email" placeholder="Enter email" />
        </Div>
      </Label>
      <Label>
        Password
        <Input type="password" name="password" placeholder="Enter password" />
      </Label>

      <Button>Log in</Button>
    </Form>
  );
};
