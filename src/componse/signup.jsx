import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
function signup() {
    return (
        <div className='signup'>
            <div className="section">
                <div className="container">
                    <div className="login-box">
                        <div className="row">
                            <div className=" login-right">
                                <form action="#" className='form1'>
                                    <div className="from-group">
                                        <input type="text" name="" placeholder="Email" required />
                                    </div>
                                    <div className="from-group">
                                        <input type="uesrname" name="" placeholder="uesrname" required />
                                    </div>
                                    <div className="from-group">
                                        <input type="password" name="" placeholder="Password" required />
                                    </div>
                                    <div className="from-button">
                                        <Link to="/Login" className='looping'>Login</Link>
                                        <input type="submit" value="Sign Up" required />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default signup;
