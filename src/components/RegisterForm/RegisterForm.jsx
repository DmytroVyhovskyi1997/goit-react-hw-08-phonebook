
import { useDispatch } from "react-redux";
import { register } from "redux/auth/authOperation";

export const RegisterForm = () => {

    const dispatch = useDispatch();
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

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
      <p>Registration</p>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label>
          Username
          <input  type="text" name="name" placeholder="Enter user name" />
        </label>
        <label>
          Email
          <input type="email" name="email" placeholder="Enter email" />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="Enter password" />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  );
};
