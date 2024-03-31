import React, { useState } from 'react';

const theme = {
    SidebarItems: 'font-display tracking-tight py-2 px-2 hover:rounded-l-xl hover:border hover:bg-zinc-800 cursor-pointer',
    HomeCards: 'w-1/2 mx-2 bg-zinc-700 shadow-lg rounded-lg bg-zinc-900 py-10',
    HomeProject: 'px-5 bg-zinc-700 shadow-lg rounded-lg bg-zinc-900 py-10',
    ProjectCards: 'flex justify-around items-center border rounded-xl bg-zinc-900',
}

function User() {
    const [selectedItem, setSelectedItem] = useState('Home');

    const [review, setReview] = useState('');
    const [isValid, setIsValid] = useState(false);

    // Function to handle review input change
    const handleReviewChange = (event) => {
        const newReview = event.target.value;
        setReview(newReview);
        // Check if review is not empty and does not exceed 300 characters
        setIsValid(newReview.trim() !== '' && newReview.trim().split(/\s+/).length <= 300);
    };

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add logic to handle form submission (e.g., post review to server)
        console.log('Review posted:', review);
    };

    // Function to handle sidebar item click
    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    // Home Screen Content
    const renderHomeContent = () => (
        <div>
            <div className="flex flex-col gap-5 justify-center items-center h-[77vh]">
                <div className='flex w-full gap-2'>
                    <div className={`${theme.HomeCards}`}>
                        <div className='flex flex-col gap-2 text-center'>
                            <div className="text-[#CDEA68] text-lg font-semibold">Total Spent</div>
                            <div className="text-[#CDEA68] font-condensed text-8xl font-bold">$25.0</div>
                            <div className="text-[#CDEA68]">100% more than last month</div>
                        </div>
                    </div>
                    <div className={`${theme.HomeCards}`}>
                        <div className='flex flex-col gap-2 text-center'>
                            <div className="text-[#CDEA68] text-lg font-semibold">Total Project</div>
                            <div className="text-[#CDEA68] font-condensed text-8xl font-bold">2</div>
                            <div className="text-[#CDEA68]">100% more than last month</div>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-zinc-900 shadow-lg rounded-lg px-2 py-5 flex gap-5">
                    <div className={`${theme.ProjectCards}`}>
                        <div className={`${theme.HomeProject}`}>
                            <div className='flex flex-col gap-2 text-center'>
                                <div className="text-[#CDEA68] text-lg font-semibold">Project Title</div>
                                <div className="text-[#CDEA68] font-condensed text-8xl font-bold">67%</div>
                                <div className="text-[#CDEA68]">Phase 4</div>
                                <progress className="progress progress-info w-56" value={75} max="100"></progress>
                            </div>
                        </div>
                    </div>
                    <div className={`${theme.ProjectCards}`}>
                        <div className={`${theme.HomeProject}`}>
                            <div className='flex flex-col gap-2 text-center'>
                                <div className="text-[#CDEA68] text-lg font-semibold">Project Title</div>
                                <div className="text-[#CDEA68] font-condensed text-8xl font-bold">25%</div>
                                <div className="text-[#CDEA68]">Phase 2</div>
                                <progress className="progress progress-info w-56" value={50} max="100"></progress>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Content for Projects
    const renderProjectsContent = () => (
        <div className="flex flex-col gap-5 h-full">
            <h1 className='font-condensed text-5xl font-bold'>Current Projects</h1>
            <div className='flex flex-col gap-2'>
                <div className={`${theme.ProjectCards}`}>
                    <div className='w-1/2 flex flex-col gap-2 text-center px-5'>
                        <div className="text-info text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit</div>
                        <div className="text-info font-condensed text-8xl font-bold">67%</div>
                        <div className="text-info ">1 Phases remaining</div>
                    </div>
                    <div className="w-20 rounded">
                        <img src="public\img\slides\bean.png" />
                    </div>
                    <div className='flex flex-col gap-2 p-5 border-l'>
                        <p>Phase 1</p><progress className="progress progress-info w-56" value={100} max="100"></progress>
                        <p>Phase 2</p><progress className="progress progress-info w-56" value={100} max="100"></progress>
                        <p>Phase 3</p><progress className="progress progress-info w-56" value={100} max="100"></progress>
                        <p>Phase 4</p><progress className="progress progress-info w-56" value={75} max="100"></progress>
                        <p>Phase 5</p><progress className="progress progress-info w-56" value={0} max="100"></progress>
                    </div>
                </div>
                <div className={`${theme.ProjectCards}`}>
                    <div className='w-1/2 flex flex-col gap-2 text-center px-5'>
                        <div className="text-info text-lg font-semibold">Lorem ipsum dolor sit amet</div>
                        <div className="text-info font-condensed text-8xl font-bold">25%</div>
                        <div className="text-info ">3 Phases remaining</div>
                    </div>
                    <div className="w-20 rounded">
                        <img src="public\img\slides\bean.png" />
                    </div>
                    <div className='flex flex-col gap-2 p-5 border-l'>
                        <p>Phase 1</p><progress className="progress progress-info w-56" value={100} max="100"></progress>
                        <p>Phase 2</p><progress className="progress progress-info w-56" value={50} max="100"></progress>
                        <p>Phase 3</p><progress className="progress progress-info w-56" value={0} max="100"></progress>
                        <p>Phase 4</p><progress className="progress progress-info w-56" value={0} max="100"></progress>
                        <p>Phase 5</p><progress className="progress progress-info w-56" value={0} max="100"></progress>
                    </div>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus font-display border border-zinc-800 bg-zinc-900">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-zinc-900 tracking-tight text-lg peer-checked:bg-zinc-700 peer-checked:text-white">
                    Previous Projects
                </div>
                <div tabIndex={0} className="collapse-content flex flex-col gap-2 text-md peer-checked:bg-zinc-700 peer-checked:text-white">
                    <div className={`${theme.ProjectCards}`}>
                        <div className='w-1/2 flex flex-col gap-2 text-center px-5'>
                            <div className="text-info text-lg font-semibold">Lorem ipsum</div>
                            <div className="text-info font-condensed text-8xl font-bold">100%</div>
                            <div className="text-info ">Status: Completed</div>
                        </div>
                        <div className="w-20 rounded">
                            <img src="img\slides\bean.png" />
                        </div>
                        <div className='flex flex-col gap-2 p-5 border-l'>
                            <p>Phase 1</p><progress className="progress progress-info w-56" value={100} max="100"></progress>
                            <p>Phase 2</p><progress className="progress progress-info w-56" value={100} max="100"></progress>
                            <p>Phase 3</p><progress className="progress progress-info w-56" value={100} max="100"></progress>
                            <p>Phase 4</p><progress className="progress progress-info w-56" value={100} max="100"></progress>
                            <p>Phase 5</p><progress className="progress progress-info w-56" value={100} max="100"></progress>
                        </div>
                    </div>
                    <div className={`${theme.ProjectCards}`}>
                        <div className='w-1/2 flex flex-col gap-2 text-center px-5'>
                            <div className="text-info text-lg font-semibold">Lorem</div>
                            <div className="text-info font-condensed text-8xl font-bold">40%</div>
                            <div className="text-info ">Status: Canceled</div>
                        </div>
                        <div className="w-20 rounded">
                            <img src="img\slides\bubbles.png" />
                        </div>
                        <div className='flex flex-col gap-2 p-5 border-l'>
                            <p>Phase 1</p><progress className="progress progress-info w-56" value={100} max="100"></progress>
                            <p>Phase 2</p><progress className="progress progress-info w-56" value={100} max="100"></progress>
                            <p>Phase 3</p><progress className="progress progress-info w-56" value={0} max="100"></progress>
                            <p>Phase 4</p><progress className="progress progress-info w-56" value={0} max="100"></progress>
                            <p>Phase 5</p><progress className="progress progress-info w-56" value={0} max="100"></progress>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Content for Review
    const renderReviewContent = () => (
        <div>
            <h1 className='font-condensed text-5xl font-bold text-white'>Say something about us: </h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    className="w-full h-48 p-4 border rounded-xl font-display bg-zinc-900"
                    value={review}
                    onChange={handleReviewChange}
                    placeholder="Write your review here..."
                ></textarea>
                <div className="flex justify-end mt-4">
                    <button
                        type="submit"
                        className={`px-4 py-2 rounded ${isValid ? 'bg-red-500 text-white hover:bg-green-600' : 'bg-zinc-300 text-zinc-600 cursor-not-allowed'}`}
                        disabled={!isValid}
                    >
                        Post
                    </button>
                    <button
                        type="button"
                        className="ml-4 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
                        disabled={!isValid}
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );

    const [userInfo, setUserInfo] = useState({
        firstName: 'Wali',
        lastName: 'Muhammad',
        profilePicture: 'img/social/founder.jpg',
        newPassword: '',
        confirmPassword: '',
    });
    const [isEditingName, setIsEditingName] = useState(false);
    const [isEditingPassword, setIsEditingPassword] = useState(false);

    // Function to handle input change for first name and last name
    const handleNameChange = (event) => {
        const { name, value } = event.target;
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            [name]: value,
        }));
    };

    // Function to handle profile picture change
    // const handleProfilePictureChange = (event) => {
    //     const newProfilePicture = event.target.value;
    //     setUserInfo((prevUserInfo) => ({
    //         ...prevUserInfo,
    //         profilePicture: newProfilePicture,
    //     }));
    // };

    // Function to handle password change
    const handlePasswordChange = (event) => {
        const { name, value } = event.target;
        setUserInfo((prevUserInfo) => ({
            ...prevUserInfo,
            [name]: value,
        }));
    };

    // Function to handle editing of name or password
    const handleEditClick = (section) => {
        if (section === 'name') {
            setIsEditingName(true);
        } else if (section === 'password') {
            setIsEditingPassword(true);
        }
    };

    // Function to handle update of name or password
    const handleUpdateClick = (section) => {
        if (section === 'name') {
            setIsEditingName(false);
            // Add logic to update user's name on server
        } else if (section === 'password') {
            setIsEditingPassword(false);
            // Add logic to update user's password on server
        }
    };

    // Content for Profile
    const renderProfileContent = () => (
        <div className="max-w-lg mx-auto mt-8 p-6 bg-zinc-900 rounded-lg shadow-md">
            {/* Profile Picture and Name Section */}
            <div className="flex items-center mb-8">
                <div className="relative mr-4">
                    <img
                        src={userInfo.profilePicture}
                        alt="Profile"
                        className="w-24 h-24 rounded-full"
                    />
                    {isEditingName && (
                        <button
                            onClick={() => handleUpdateClick('name')}
                            className="absolute top-0 right-0 bg-blue-500 text-white rounded-full p-1"
                        >
                            Update
                        </button>
                    )}
                </div>
                <div>
                    {isEditingName ? (
                        <input
                            type="text"
                            name="firstName"
                            value={userInfo.firstName}
                            onChange={handleNameChange}
                            className="w-36 mb-2 px-2 py-1 border rounded"
                        />
                    ) : (
                        <h2 className="text-xl font-bold mb-1">{userInfo.firstName} {userInfo.lastName}</h2>
                    )}
                    {isEditingName ? (
                        <input
                            type="text"
                            name="lastName"
                            value={userInfo.lastName}
                            onChange={handleNameChange}
                            className="w-36 mb-2 px-2 py-1 border rounded"
                        />
                    ) : null}
                    <button
                        onClick={() => handleEditClick('name')}
                        className="text-zinc-500 hover:text-zinc-800"
                    >
                        {isEditingName ? 'Cancel' : 'Edit'}
                    </button>
                </div>
            </div>

            {/* Password Section */}
            <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Change Password</h3>
                {isEditingPassword ? (
                    <div className="flex">
                        <input
                            type="password"
                            name="newPassword"
                            value={userInfo.newPassword}
                            onChange={handlePasswordChange}
                            placeholder="New Password"
                            className="w-36 mb-2 mr-2 px-2 py-1 border rounded"
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            value={userInfo.confirmPassword}
                            onChange={handlePasswordChange}
                            placeholder="Confirm Password"
                            className="w-36 mb-2 px-2 py-1 border rounded"
                        />
                    </div>
                ) : (
                    <p className="mb-2">**********</p>
                )}
                <button
                    onClick={() => handleEditClick('password')}
                    className="text-white hover:text-zinc-700"
                >
                    {isEditingPassword ? 'Cancel' : 'Change Password'}
                </button>
                {isEditingPassword && (
                    <button
                        onClick={() => handleUpdateClick('password')}
                        className="ml-4 bg-blue-500 text-white px-3 py-1 rounded"
                    >
                        Update
                    </button>
                )}
            </div>
        </div>
    );

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="bg-zinc-900 text-white w-64 flex-shrink-0">
                <div className="py-6 pl-6 flex flex-col">
                    <h2 className="font-condensed lg:text-5xl sm:text-2xl font-bold">Dashboard</h2>
                    <ul className="mt-6">
                        <li
                            className={`${theme.SidebarItems} ${selectedItem === 'Home' ? 'bg-zinc-800 rounded-l-xl' : ''}`}
                            onClick={() => handleItemClick('Home')}
                        >
                            Home
                        </li>
                        <li
                            className={`${theme.SidebarItems} ${selectedItem === 'Projects' ? 'bg-zinc-800 rounded-l-xl' : ''}`}
                            onClick={() => handleItemClick('Projects')}
                        >
                            Projects
                        </li>
                        <li
                            className={`${theme.SidebarItems} ${selectedItem === 'Review' ? 'bg-zinc-800 rounded-l-xl' : ''}`}
                            onClick={() => handleItemClick('Review')}
                        >
                            Review
                        </li>
                        <li
                            className={`${theme.SidebarItems} ${selectedItem === 'Profile' ? 'bg-zinc-800 rounded-l-xl' : ''}`}
                            onClick={() => handleItemClick('Profile')}
                        >
                            Profile
                        </li>
                    </ul>
                </div>
            </div>
            {/* Content */}
            <div className="flex-1 bg-zinc-800 rounded-l-xl p-10">
                {selectedItem === 'Home' && renderHomeContent()}
                {selectedItem === 'Projects' && renderProjectsContent()}
                {selectedItem === 'Review' && renderReviewContent()}
                {selectedItem === 'Profile' && renderProfileContent()}
            </div>
        </div>
    );
}

export default User;