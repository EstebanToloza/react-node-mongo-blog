import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
    return (
        <div className="login">
            <form className="loginForm">
                <label htmlFor="email">Email</label>
                <input className="loginInput" type="email" placeholder="Enter your email..." id="email" />   
                <label htmlFor="password">Password</label>
                <input className="loginInput" type="password" placeholder="Enter your password..." id="password" />
                <button className="loginButton">Login</button>
                <button className="loginRegisterButton">
                    <Link className="link" to="/register">Register</Link>
                </button>
            </form>
        </div>
    )
}

export default Login
