import React from "react";
import './LoginForm.css';
import { ImUser } from "react-icons/im";
import { RiLockPasswordFill } from "react-icons/ri";



const LoginForm = () => {
return(
<div className="wrapper">
    <form action="">
        <h1>LoginForm</h1>
        <div className="input-box">
            <input type="text" placeholder="User Name" required/>
            <ImUser className="icon"/>

        </div>
        <div className="input-box">
            <input type="password" placeholder="Password" required/>
            <RiLockPasswordFill className="icon" />
        </div>
        <div className="remember-forgot">
            <label htmlFor=""><input type="checkbox" />Remember Me</label>
            <a href="\#">Forgot Password</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
            <p>Don't have any account?</p><a href="\#">Register</a>
        </div>
    </form>
</div>
);
};
export default LoginForm;