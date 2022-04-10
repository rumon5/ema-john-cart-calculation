import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='login-container'>
            <div>

                <h2 className='card-title'>SignUp</h2>
                <form>
                    <div className='input-group'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder='Your email' />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" placeholder='Your password' />
                    </div>
                    <button className='login-button'>SignUp</button>
                    <div className='new-accoutn-cont'>
                        <span>Already have an account?</span> <Link to='/login'> Login</Link>
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

export default SignUp;