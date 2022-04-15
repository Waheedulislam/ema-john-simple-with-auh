import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GoogLogo from '../../img/GoogLogo.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const [createUserWithEmailAndPassword,
        user, loading] = useCreateUserWithEmailAndPassword(auth);


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };

    const handlePassword = event => {
        setPassword(event.target.value);
    };

    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    };

    if (user) {
        navigate('/shop')
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two password did not match')
            return;
        }
        if (password.length < 6) {
            setError('password must be 6 characters longer');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='from-container'>
            <div>
                <h2 className='from-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error} </p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='from-submit' type="submit" value="Sign Up" />
                </form>
                <p className='p-link'>
                    Already have an account? <Link to='/login' className='from-link '>Login</Link>
                </p>







                <div className='horizontal-divider'>
                    <div className='line-left' />
                    <p >or</p>
                    <div className='line-right' />
                </div>
                <button className='btn'>
                    <img src={GoogLogo} alt="" />
                    <p>Continue with Google</p>
                </button>
            </div>
        </div>
    );
};

export default SignUp;