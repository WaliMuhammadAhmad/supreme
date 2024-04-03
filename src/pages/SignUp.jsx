import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

function SignUp() {

    let showSuceess = 'hidden';
    let showError = 'hidden';

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameRegex = /^[a-zA-Z\s]{3,15}$/;
        const emailRegex = /^[a-zA-Z][\w.-]*@[a-zA-Z]+\.[a-zA-Z]{2,3}$/;

        let formValid = true;
        const newErrors = { ...errors };

        if (!nameRegex.test(formData.firstName)) {
            newErrors.firstName = 'First name contains 3-15 characters only.';
            formValid = false;
        } else {
            newErrors.firstName = '';
        }

        if (!nameRegex.test(formData.lastName)) {
            newErrors.lastName = 'Last name must contains 3-15 characters only.';
            formValid = false;
        } else {
            newErrors.lastName = '';
        }

        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email address';
            formValid = false;
        } else {
            newErrors.email = '';
        }

        if (formData.password.length < 8 || formData.password.length > 16) {
            newErrors.password = 'Password must be 8-16 characters long.';
            formValid = false;
        } else {
            newErrors.password = '';
        }

        if (formData.password !== formData.repeatPassword) {
            newErrors.repeatPassword = 'Passwords do not match';
            formValid = false;
        } else {
            newErrors.repeatPassword = '';
        }

        setErrors(newErrors);

        if (formValid) {
            showSuceess = 'block';
            console.log('Form submitted:', formData);
        }
        else {
            showError = 'block';
        }
    };

    return (
        <>
        <Navbar />
        <div className="font-display tracking-tight w-full h-screen bg-[url('img\logo\logo.svg')] flex items-center justify-center">
            <div className="lg:w-1/3 lg:h-3/4 flex flex-col justify-evenly items-center rounded-xl bg-[#CDEA68]">
                <h1 className='font-condensed lg:text-5xl text-zinc-900'>Sign Up</h1>
                <form className="max-w-md mx-auto" method='POST' onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="firstName"
                                className={`peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.firstName && 'text-red-500'}`}
                            >
                                First name
                            </label>
                            {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="lastName"
                                className={`peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.lastName && 'text-red-500'}`}
                            >
                                Last name
                            </label>
                            {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="email"
                            className={`peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.email && 'text-red-500'}`}
                        >
                            Email address
                        </label>
                        {errors.email && <span className="text-red-500">{errors.email}</span>}
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="password"
                            className={`peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.password && 'text-red-500'}`}
                        >
                            Password
                        </label>
                        {errors.password && <span className="text-red-500">{errors.password}</span>}
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                            type="password"
                            name="repeatPassword"
                            value={formData.repeatPassword}
                            onChange={handleChange}
                            className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="repeatPassword"
                            className={`peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${errors.repeatPassword && 'text-red-500'}`}
                        >
                            Confirm password
                        </label>
                        {errors.repeatPassword && <span className="text-red-500">{errors.repeatPassword}</span>}
                    </div>
                    <input
                        type="submit"
                        value="Sign Up"
                        className="w-full py-2.5 px-5 text-sm font-medium border-2 text-zinc-900 border-zinc-900 rounded-md hover:bg-zinc-900 hover:text-white focus:outline-none focus:ring-0 focus:border-zinc-900"
                    />
                </form>
                <Link to="/signin" className="text-zinc-900">Already have an account? Sign in</Link>
                <div className='flex flex-col gap-2'>
                    <div role="alert" className={`${showSuceess} alert alert-success`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Sign Up succeed!</span>
                    </div>
                    <div role="alert" className={`${showSuceess} alert alert-error`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Sign Up failed!</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default SignUp;