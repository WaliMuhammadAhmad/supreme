import React, { useState } from 'react';

const theme = {
    SidebarItems: 'font-display tracking-tight py-2 px-2 hover:rounded-xl hover:bg-gray-700 cursor-pointer',
}

function Admin() {

    const [selectedItem, setSelectedItem] = useState('Home');

    // Function to handle sidebar item click
    const handleItemClick = (item) => {
        setSelectedItem(item);
    };

    // Content for Home
    const renderHomeContent = () => (
        <div>
            <div className="flex justify-center items-center h-[77vh]">
                {/* First Card */}
                <div className="w-1/2 h-1/3 mx-2 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center">
                    <div className="text-primary text-4xl font-bold">$</div>
                    <div className="text-primary text-lg font-semibold">Total Gain</div>
                    <div className="text-primary text-xl font-bold">25.6K</div>
                    <div className="text-primary">76% more than last month</div>
                </div>

                {/* Second Card */}
                <div className="w-1/2 h-1/3 mx-2 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-secondary w-12 h-12 stroke-current mb-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    <div className="text-secondary text-lg font-semibold">Current Projects</div>
                    <div className="text-secondary text-xl font-bold">2</div>
                    <div className="text-secondary">10% more than last month</div>
                </div>

                {/* Third Card */}
                <div className="w-1/2 h-1/3 mx-2 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-info w-12 h-12 stroke-current mb-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                    <div className="text-info text-lg font-semibold">75% Done</div>
                    <div className="text-warning text-xl font-bold">Project 1</div>
                    <div className="text-info">Phase 4 Remaining</div>
                </div>
            </div>
        </div>
    );

    // State to manage project completion status
    const [completedProjects, setCompletedProjects] = useState([]);

    // Function to handle completion of a project
    const handleCompleteProject = (projectName) => {
        const projectPath = prompt("Enter the path of the .ppt file:");
        if (projectPath) {
            // Logic to mark project as completed
            const updatedProjects = [...completedProjects, projectName];
            setCompletedProjects(updatedProjects);
            alert("Project marked as completed!");
        }
    };

      // Function to handle cancellation of a project
      const handleCancelProject = (projectName) => {
        const confirmCancel = window.confirm("Are you sure you want to cancel this project?");
        if (confirmCancel) {
            // Logic to cancel project and refund money
            alert("Project canceled and money refunded!");
        }
    };


    // Content for Projects
    const renderProjectsContent = () => (
        <div>
            <h2>Current Project</h2>
            <div className='cardcontainer flex gap-5 '>
                {/* Sample project cards */}
                <div className='flex flex-col gap-5 justify-center px-2 py-1 border border-zinc-900 rounded-xl'>
                    <h1 className='text-3xl font-bold'>Project Name 1</h1>
                    <h1>Status: Finished</h1>
                    <p className='text-md font-medium'>Project description</p>
                    <h3>Progress 75%</h3>
                    <progress className="progress progress-accent" value="75" max="100"></progress>
                    {/* Buttons for project actions */}
                    <div className="flex justify-between">
                        <button onClick={() => handleCompleteProject("Project Name 1")} disabled={completedProjects.includes("Project Name 1")}>Completed</button>
                        <button onClick={() => handleCancelProject("Project Name 1")}>Cancel</button>
                    </div>
                </div>

                <div className='flex flex-col gap-5 justify-center px-2 py-1 border border-zinc-900 rounded-xl'>
                    <h1 className='text-3xl font-bold'>Project Name 2</h1>
                    <h1>Status: Finished</h1>
                    <p className='text-md font-medium'>Project description</p>
                    <h3>Progress 75%</h3>
                    <progress className="progress progress-accent" value="75" max="100"></progress>
                    {/* Buttons for project actions */}
                    <div className="flex justify-between">
                        <button onClick={() => handleCompleteProject("Project Name 2")} disabled={completedProjects.includes("Project Name 2")}>Completed</button>
                        <button onClick={() => handleCancelProject("Project Name 2")}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );

    // State variables for form fields
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [video, setVideo] = useState(null);
    const [price, setPrice] = useState('');

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Validation logic here
        // If validation passes, proceed with adding the template
        // If validation fails, show error messages
    };

    // Function to handle discarding form data
    const handleDiscard = () => {
        setTitle('');
        setDescription('');
        setThumbnail(null);
        setVideo(null);
        setPrice('');
    };


    const renderAddTemplates = () => (
        <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">Add Template</h1>
        <form onSubmit={handleSubmit}>
            {/* Title */}
            <div className="mb-4">
                <label htmlFor="title" className="block mb-2">Title</label>
                <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
            </div>
            {/* Description */}
            <div className="mb-4">
                <label htmlFor="description" className="block mb-2">Description</label>
                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md w-full"></textarea>
            </div>
            {/* Thumbnail Image */}
            <div className="mb-4">
                <label htmlFor="thumbnail" className="block mb-2">Thumbnail Image</label>
                <input type="file" id="thumbnail" accept=".png, .jpg, .jpeg" onChange={(e) => setThumbnail(e.target.files[0])} className="border border-gray-300 px-3 py-2 rounded-md" />
            </div>
            {/* Video */}
            <div className="mb-4">
                <label htmlFor="video" className="block mb-2">Video</label>
                <input type="file" id="video" accept=".mp4" onChange={(e) => setVideo(e.target.files[0])} className="border border-gray-300 px-3 py-2 rounded-md" />
            </div>
            {/* Price */}
            <div className="mb-4">
                <label htmlFor="price" className="block mb-2">Estimated Price</label>
                <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="border border-gray-300 px-3 py-2 rounded-md w-full" />
            </div>
            {/* Buttons */}
            <div className="flex justify-end">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Add</button>
                <button type="button" onClick={handleDiscard} className="bg-red-500 text-white px-4 py-2 rounded-md">Discard</button>
            </div>
        </form>
    </div>
    );

        // Function to open modal for updating template
        const handleUpdate = (templateId) => {
            // Logic to open modal for updating template
        };
    
        // Function to delete template
        const handleDelete = (templateId) => {
            // Logic to delete template
        };

    // Content for manage template
    const renderManageTemplate = () => (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Manage Template</h1>
            {/* Section 1 */}
            <div className="flex justify-between mb-8">
                {/* Card 1 */}
                <div className="w-1/2 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center px-6 py-4">
                    <h2 className="text-lg font-semibold mb-2">Templates added in last 30 days</h2>
                    <p className="text-3xl font-bold">10</p>
                </div>
                {/* Card 2 */}
                <div className="w-1/2 bg-white shadow-lg rounded-lg flex flex-col justify-center items-center px-6 py-4">
                    <h2 className="text-lg font-semibold mb-2">Total Templates</h2>
                    <p className="text-3xl font-bold">50</p>
                </div>
            </div>
            {/* Section 2 */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th>Thumbnail</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {/* Example Template Row */}
                        <tr>
                            <td>
                                <img src="img\slides\bean.png" alt="Thumbnail" className="w-16 h-16" />
                            </td>
                            <td>Template 1</td>
                            <td>Description of Template 1</td>
                            <td>
                                <button onClick={() => handleUpdate(1)} className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Update</button>
                                <button onClick={() => handleDelete(1)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                            </td>
                        </tr>
                        {/* Add more template rows here */}
                    </tbody>
                </table>
            </div>
            {/* Modal for updating template */}
            {/* Add modal component here */}
        </div>
    );

    const [users] = useState([
        {
            id: 1,
            name: 'John Doe',
            avatar: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
        },
        {
            id: 2,
            name: 'Jane Smith',
            avatar: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
        },
        {
            id: 3,
            name: 'Michael Johnson',
            avatar: 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg',
        },
        // Add more users as needed
    ]);

    const totalUsers = users.length;

    const renderManageUser = () => (
        <div>
            {/* Total Users Card */}
            <div className="w-full h-32 bg-white shadow-lg rounded-lg flex justify-center items-center mb-8">
                <div className="text-4xl font-bold">{totalUsers}</div>
                <div className="ml-4">
                    <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                        {users.map((user) => (
                            <div key={user.id} className="avatar">
                                <div className="w-12">
                                    <img src={user.avatar} alt={user.name} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* User List */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {/* Map through users and render each row */}
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Update</button>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const [reviews] = useState([
        {
            id: 1,
            userName: 'John Doe',
            rating: 4,
            comment: 'Great experience!',
        },
        {
            id: 2,
            userName: 'Jane Smith',
            rating: 5,
            comment: 'Awesome service!',
        },
        {
            id: 3,
            userName: 'Michael Johnson',
            rating: 3,
            comment: 'Could be better.',
        },
        // Add more reviews as needed
    ]);

    const totalReviews = reviews.length;

    const renderManageReview = () => (
        <div>
            {/* Total Reviews Card */}
            <div className="w-full h-32 bg-white shadow-lg rounded-lg flex justify-center items-center mb-8">
                <div className="text-4xl font-bold">{totalReviews}</div>
            </div>

            {/* Review List */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>Rating</th>
                            <th>Comment</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        {/* Map through reviews and render each row */}
                        {reviews.map((review) => (
                            <tr key={review.id}>
                                <td>{review.userName}</td>
                                <td>{review.rating}</td>
                                <td>{review.comment}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Update</button>
                                    <button className="btn btn-ghost btn-xs">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );

    const renderManageProfile = () => (
        <div>
            <h1 className="text-3xl font-bold mb-5">Manage Profile</h1>
            <p>Form for giving a review for the website.</p>
        </div>
    );

    const [adminInfo, setAdminInfo] = useState({
        firstName: 'John',
        lastName: 'Doe',
        email: 'admin@example.com',
        // Add more admin info fields as needed
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminInfo({ ...adminInfo, [name]: value });
    };

    const handleSubmitforProfile = (e) => {
        e.preventDefault();
        // Logic for updating admin profile
        console.log('Admin profile updated:', adminInfo);
    };


    // Content for Profile
    const renderProfileContent = () => (
        <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">Manage Admin Profile</h1>
        <form onSubmit={handleSubmitforProfile}>
            {/* First Name */}
            <div className="mb-4">
                <label className="block mb-2">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={adminInfo.firstName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary"
                />
            </div>
            {/* Last Name */}
            <div className="mb-4">
                <label className="block mb-2">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={adminInfo.lastName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary"
                />
            </div>
            {/* Email */}
            <div className="mb-4">
                <label className="block mb-2">Email</label>
                <input
                    type="email"
                    name="email"
                    value={adminInfo.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary"
                    readOnly // Admin cannot update email
                />
            </div>
            {/* Password (Update functionality can be added similarly) */}
            <div className="mb-4">
                <label className="block mb-2">Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter new password"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-primary"
                />
            </div>
            <button type="submit" className="btn btn-primary">Update Profile</button>
        </form>
    </div>
    );

    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="bg-gray-800 text-white w-64 flex-shrink-0">
                <div className="p-6 flex flex-col">
                    <h2 className="font-condensed lg:text-5xl sm:text-2xl font-bold">Dashboard</h2>
                    <ul className="mt-6">
                        <li
                            className={`${theme.SidebarItems} ${selectedItem === 'Home' ? 'bg-gray-700 rounded-xl' : ''}`}
                            onClick={() => handleItemClick('Home')}
                        >
                            Home
                        </li>
                        <li
                            className={`${theme.SidebarItems} ${selectedItem === 'Projects' ? 'bg-gray-700 rounded-xl' : ''}`}
                            onClick={() => handleItemClick('Projects')}
                        >
                            Projects
                        </li>
                        <li
                            className={`${theme.SidebarItems} ${selectedItem === 'Add Template' ? 'bg-gray-700 rounded-xl' : ''}`}
                            onClick={() => handleItemClick('Add Template')}
                        >
                            Add Template
                        </li>
                        <li
                            className={`${theme.SidebarItems} ${selectedItem === 'Manage Templates' ? 'bg-gray-700 rounded-xl' : ''}`}
                            onClick={() => handleItemClick('Manage Templates')}
                        >
                        Manage Templates
                        </li>
                        <li
                            className={`${theme.SidebarItems} ${selectedItem === 'Manage User' ? 'bg-gray-700 rounded-xl' : ''}`}
                            onClick={() => handleItemClick('Manage User')}
                            >
                            Manage User
                        </li>
                        <li
                            className={`${theme.SidebarItems} ${selectedItem === 'Manage Review' ? 'bg-gray-700 rounded-xl' : ''}`}
                            onClick={() => handleItemClick('Manage Review')}
                        >
                            Manage Review
                        </li>
                        <li
                            className={`${theme.SidebarItems} ${selectedItem === 'Manage Profile' ? 'bg-gray-700 rounded-xl' : ''}`}
                            onClick={() => handleItemClick('Manage Profile')}
                        >
                            Manage Profile
                        </li>
                    </ul>
                </div>
            </div>
            {/* Content */}
            <div className="flex-1 bg-gray-200 p-10">
                {selectedItem === 'Home' && renderHomeContent()}
                {selectedItem === 'Projects' && renderProjectsContent()}
                {selectedItem === 'Add Template' && renderAddTemplates()}
                {selectedItem === 'Manage Templates' && renderManageTemplate()}
                {selectedItem === 'Manage User' && renderManageUser()}
                {selectedItem === 'Manage Review' && renderManageReview()}
                {selectedItem === 'Manage Profile' && renderProfileContent()}
                {/* {selectedItem === 'Profile' && renderProfileContent()} */}
            </div>
        </div>
    )
}

export default Admin