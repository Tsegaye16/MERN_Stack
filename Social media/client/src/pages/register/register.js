import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="User name"></input>
            <input type="email" placeholder="E-mail"></input>
            <input type="password" placeholder="password"></input>
            <input type="text" placeholder="Name"></input>
            <button>Register</button>
          </form>
        </div>
        <div className="left">
          <h1 className="h1">Hello Guys.</h1>
          <p>This is my first ** site</p>
          <span>Do you have an account?</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
