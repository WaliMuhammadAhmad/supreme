import React, { useState } from 'react';
import { FaSignHanging } from 'react-icons/fa6';

function Login() {
    const [activeForm, setActiveForm] = useState('sign-in');

    const toggleForm = () => {
        setActiveForm(activeForm === 'sign-in' ? 'sign-up' : 'sign-in');
    };

    return (
        <div className="w-full h-screen bg-cover bg-[url('C:\Users\wali\Documents\Project\supreme\public\img\logo\logo.svg')] flex items-center justify-center">
            <div className="container w-1/2 h-3/4 bg-red-900 rounded-xl">
                <div className={`form-container flex ${activeForm === 'sign-in' ? 'sign-in' : 'sign-up'}`}>
                    <div className='w-1/2 h-full flex flex-col gap-10'>
                        <h1>Welcome to Supreme</h1>
                        <p>Sign in to continue</p>
                    </div>
                    <div className='w-1/2'>
                        <h1>Sign In</h1>
                        <form action="">
                            <div className='form-container'>
                                <label htmlFor="">Enter Email</label>
                                <input type="email" />
                            </div>
                            <div className='form-container'>
                                <label htmlFor="">Enter Password</label>
                                <input type="password" required />
                            </div>
                            <div className='form-container'>
                                <input type="submit" value={"Sign in"}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
