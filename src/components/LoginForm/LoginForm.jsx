export const LoginForm = () => {
    return(
        <form  autoComplete="off">
      <label>
        Email
        <input
        
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </label>
      <label >
        Password
        <input
          
          type="password"
          name="password"
          placeholder="Enter password"
        />
      </label>

      <button  type="submit">
        Log In
      </button>

    </form>
    )
}