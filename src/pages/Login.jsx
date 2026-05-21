import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login</h1>

      <Link to="/dashboard">
        <button>Entrar al Dashboard</button>
      </Link>
    </div>
  );
}

export default Login;