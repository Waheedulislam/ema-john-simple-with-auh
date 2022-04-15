import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogLogo from '../../img/GoogLogo.png';
const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }


    const handleAddressBlur = event => {
        setAddress(event.target.value);
    };

    const handlePhonBlur = event => {
        setPhone(event.target.value);
    };
    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);
    }
    return (
        <div className='from-container'>
            <div>
                <h2 className='from-title'>Shipping Information</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phon">Phone Number</label>
                        <input onBlur={handlePhonBlur} type="text" name="phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error} </p>
                    <input className='from-submit' type="submit" value="Add Shipping" />
                </form>







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

export default Shipment;