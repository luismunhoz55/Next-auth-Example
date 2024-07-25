const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      Login
      <form>
        <input type="text" name="email" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
