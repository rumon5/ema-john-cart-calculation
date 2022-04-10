import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {
    return (
        <div className='login-container'>
            <div>

                <h2 className='card-title'>LogIn</h2>
                <form>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder='Your email' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder='Your password' />
                    </div>
                    <button className='login-button'>LogIn</button>
                    <div className='new-accoutn-cont'>
                        <span>New to Ema-jhon?</span> <Link to='/signup'>Create New Account</Link>
                    </div>
                    <div className='hr-line-container'>
                        <div className='hr-line'>

                        </div>
                        <span>of</span>
                        <div className='hr-line'>

                        </div>
                    </div>
                </form>
                <div>
                    <button className='google-button'>Continue with Google</button>
                </div>
            </div>

        </div>
    );
};

export default LogIn;