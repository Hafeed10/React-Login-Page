import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    return (
      <div className='login'>
        <div className="section">
            <div className="container">
                <div className="login-box">
                    <div className="row">
                        <div className=" login-right">
                            <form action="#" className='form'>
                                <div className="from-group">
                                    <input type="text" name="" placeholder="Email" required/>
                                </div>
                                <div className="from-group">
                                    <input type="password" name="" placeholder="Password" required/>
                                </div>
                                <div className="from-button">
                                    <input type="submit" value="Login" required/>
                                    <Link to="/signup" className='looping'>Sign Up</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default Login;
