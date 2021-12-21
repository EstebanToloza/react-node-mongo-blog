import "./login.css";

const Login = () => {
    return (
        <div className="login">
            <form className="loginForm">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter your email..." id="email" />   
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter your password..." id="password" />
                <button className="loginButton">Login</button>
                <button className="registerButton">Register</button>
            </form>
        </div>
    )
}

export default Login
