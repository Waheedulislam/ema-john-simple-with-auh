import React, { useState } from 'react';
import GoogLogo from '../../img/GoogLogo.png';
const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    };

    const handlePhonBlur = event => {
        setPhone(event.target.value);
    };
    const handleCreateUser = event => {
        event.preventDefault();
        if (address !== phone) {
            setError('Your two password did not match')
            return;
        }
        if (address.length < 6) {
            setError('password must be 6 characters longer');
            return;
        }
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
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Confirm-password">Phone Number</label>
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