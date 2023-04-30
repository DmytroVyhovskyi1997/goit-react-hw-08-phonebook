import { useDispatch } from 'react-redux';

import { register } from 'redux/auth/authOperation';
import { Form, Button, Input, Label, Title } from './RegisterForm.module';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <Title>Registration</Title>
      <Form autoComplete="off" onSubmit={handleSubmit}>
        <Label>
          Username
          <Input type="text" name="name" placeholder="Enter user name" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" placeholder="Enter email" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" placeholder="Enter password" />
        </Label>
        <Button type="submit">Register</Button>
      </Form>
    </>
  );
};
