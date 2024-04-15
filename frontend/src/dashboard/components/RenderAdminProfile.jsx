import React, { useState } from 'react'

function RenderAdminProfile() {

    const [adminInfo, setAdminInfo] = useState({
        firstName: 'Wali',
        lastName: 'Ahmad',
        password: 'wale@gmail.com',
    });

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminInfo({ ...adminInfo, [name]: value });
        if (name === 'firstName') {
            if (!/^[a-zA-Z]{3,15}$/.test(value)) {
                setErrors({ ...errors, firstName: 'First name must be 3-15 characters and contain only letters.' });
            } else {
                setErrors({ ...errors, firstName: '' });
            }
        }
        if (name === 'lastName') {
            if (!/^[a-zA-Z]{3,15}$/.test(value)) {
                setErrors({ ...errors, lastName: 'Last name must be 3-15 characters and contain only letters.' });
            } else {
                setErrors({ ...errors, lastName: '' });
            }
        }
        if (name === 'password') {
            if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}/.test(value)) {
                setErrors({ ...errors, password: 'Password must be 8-14 characters and contain at least one alphabet, integer, and special character.' });
            } else {
                setErrors({ ...errors, password: '' });
            }
        }
    };

    const handleSubmitforProfile = (e) => {
        e.preventDefault();
        // Logic for updating admin profile
        console.log('Admin profile updated:', adminInfo);
    };

  return (
    <div className="flex flex-col gap-5 h-full">
    <h1 className='font-condensed text-5xl font-bold'>Manage Admin Profile</h1>
    <form className='w-1/2' onSubmit={handleSubmitforProfile}>

        <div className="mb-4">
            <label className="block mb-2">First Name</label>
            <input
                type="text"
                name="firstName"
                value={adminInfo.firstName}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-zinc-900 text-white border rounded-md focus:outline-none focus:border-primary"
            />
            {errors.firstName && <span className="text-red-500">{errors.firstName}</span>}
        </div>

        <div className="mb-4">
            <label className="block mb-2">Last Name</label>
            <input
                type="text"
                name="lastName"
                value={adminInfo.lastName}
                onChange={handleChange}
                className="w-full px-3 py-2 border bg-zinc-900 text-white rounded-md focus:outline-none focus:border-primary"
            />
            {errors.lastName && <span className="text-red-500">{errors.lastName}</span>}
        </div>

        <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input
                type="password"
                name="password"
                value={adminInfo.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border bg-zinc-900 text-white rounded-md focus:outline-none focus:border-primary"
            />
            {errors.password && <span className="text-red-500">{errors.password}</span>}
        </div>
        <button type="submit" className="btn bg-zinc-900 text-white hover:invert border-white">Update Profile</button>
    </form>
</div>
  )
}

export default RenderAdminProfile