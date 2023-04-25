export const RegistredForm = () => {
  return (
    <>
      <p>Registration</p>
      <form autoComplete="off">
        <label>
          Username
          <input type="text" name="name" placeholder="Enter user name" />
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
