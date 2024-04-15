import React, { useState } from 'react';
import RenderAdminProfile from './components/RenderAdminProfile';

const theme = {
    SidebarItems: 'font-display tracking-tight py-2 px-2 hover:rounded-l-xl hover:border hover:bg-zinc-800 cursor-pointer',
    HomeCards: 'w-1/2 mx-2 bg-zinc-700 shadow-lg rounded-lg bg-zinc-900 py-10',
    HomeProject: 'px-5 bg-zinc-700 shadow-lg rounded-lg bg-zinc-900 py-10',
    ProjectCards: 'flex justify-around content-around items-center border rounded-xl bg-zinc-900',
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
            <div className="flex flex-col gap-5 justify-center items-center">
                <div className='flex w-full gap-2'>
                    <div className={`${theme.HomeCards}`}>
                        <div className='flex flex-col gap-2 text-center'>
                            <div className="text-[#CDEA68] text-lg font-semibold">Total Gain</div>
                            <div className="text-[#CDEA68] font-condensed text-8xl font-bold">$ 5600</div>
                        </div>
                    </div>
                    <div className={`${theme.HomeCards}`}>
                        <div className='flex flex-col gap-2 text-center'>
                            <div className="text-[#CDEA68] text-lg font-semibold">Current Projects</div>
                            <div className="text-[#CDEA68] font-condensed text-8xl font-bold">4</div>
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
                    <div className={`${theme.ProjectCards}`}>
                        <div className={`${theme.HomeProject}`}>
                            <div className='flex flex-col gap-2 text-center'>
                                <div className="text-[#CDEA68] text-lg font-semibold">Project Title</div>
                                <div className="text-[#CDEA68] font-condensed text-8xl font-bold">55%</div>
                                <div className="text-[#CDEA68]">Phase 3</div>
                                <progress className="progress progress-info w-56" value={50} max="100"></progress>
                            </div>
                        </div>
                    </div>
                    <div className={`${theme.ProjectCards}`}>
                        <div className={`${theme.HomeProject}`}>
                            <div className='flex flex-col gap-2 text-center'>
                                <div className="text-[#CDEA68] text-lg font-semibold">Project Title</div>
                                <div className="text-[#CDEA68] font-condensed text-8xl font-bold">5%</div>
                                <div className="text-[#CDEA68]">Phase 1</div>
                                <progress className="progress progress-info w-56" value={50} max="100"></progress>
                            </div>
                        </div>
                    </div>
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
            <div className="flex flex-col gap-5 h-full">
                <h1 className='font-condensed text-5xl font-bold'>Current Projects</h1>
                <div className='flex flex-col gap-2'>
                    <div className={`${theme.ProjectCards}`}>
                        <div className='w-1/2 flex flex-col gap-2 text-center content-between px-5'>
                            <p className="text-info text-lg font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                            <h2 className="text-info font-condensed text-8xl font-bold">67%</h2>
                            <div className="flex justify-around">
                                <button className='border-2 bg-zinc-900 text-white rounded-md px-2 py-1 hover:invert' onClick={() => handleCompleteProject("Project Name 1")} disabled={completedProjects.includes("Project Name 1")}>Completed</button>
                                <button className='border-2 bg-zinc-900 text-white rounded-md px-2 py-1 hover:invert' onClick={() => handleCancelProject("Project Name 1")}>Cancel</button>
                            </div>
                        </div>
                        <div className="w-20 rounded">
                            <img src="public\img\slides\bean.png" />
                        </div>
                        <div className='flex flex-col gap-2 p-5 border-l'>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase 1
                                    <progress className="progress progress-info w-56" value={100} max="100"></progress>
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase 2
                                    <progress className="progress progress-info w-56" value={100} max="100"></progress>
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase 3
                                    <progress className="progress progress-info w-56" value={100} max="100"></progress>
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase 4
                                    <progress className="progress progress-info w-56" value={75} max="100"></progress>
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase
                                    <progress className="progress progress-info w-56" value={0} max="100"></progress>
                                </p>
                            </div>
                            <button className='border-2 bg-zinc-900 text-white rounded-md px-2 py-1 hover:invert'>Edit</button>
                        </div>
                    </div>
                    <div className={`${theme.ProjectCards}`}>
                        <div className='w-1/2 flex flex-col gap-2 text-center content-between px-5'>
                            <p className="text-info text-lg font-semibold">Lorem ipsum amet consectetur adipisicing elit</p>
                            <h2 className="text-info font-condensed text-8xl font-bold">25%</h2>
                            <div className="flex justify-around">
                                <button className='border-2 bg-zinc-900 text-white rounded-md px-2 py-1 hover:invert' onClick={() => handleCompleteProject("Project Name 1")} disabled={completedProjects.includes("Project Name 1")}>Completed</button>
                                <button className='border-2 bg-zinc-900 text-white rounded-md px-2 py-1 hover:invert' onClick={() => handleCancelProject("Project Name 1")}>Cancel</button>
                            </div>
                        </div>
                        <div className="w-20 rounded">
                            <img src="public\img\slides\bean.png" />
                        </div>
                        <div className='flex flex-col gap-2 p-5 border-l'>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase 1
                                    <progress className="progress progress-info w-56" value={100} max="100"></progress>
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase 2
                                    <progress className="progress progress-info w-56" value={25} max="100"></progress>
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase 3
                                    <progress className="progress progress-info w-56" value={0} max="100"></progress>
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase 4
                                    <progress className="progress progress-info w-56" value={0} max="100"></progress>
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase
                                    <progress className="progress progress-info w-56" value={0} max="100"></progress>
                                </p>
                            </div>
                            <button className='border-2 bg-zinc-900 text-white rounded-md px-2 py-1 hover:invert'>Edit</button>
                        </div>
                    </div>
                    <div className={`${theme.ProjectCards}`}>
                        <div className='w-1/2 flex flex-col gap-2 text-center content-between px-5'>
                            <p className="text-info text-lg font-semibold">Lorem ipsum consectetur adipisicing elit</p>
                            <h2 className="text-info font-condensed text-8xl font-bold">55%</h2>
                            <div className="flex justify-around">
                                <button className='border-2 bg-zinc-900 text-white rounded-md px-2 py-1 hover:invert' onClick={() => handleCompleteProject("Project Name 1")} disabled={completedProjects.includes("Project Name 1")}>Completed</button>
                                <button className='border-2 bg-zinc-900 text-white rounded-md px-2 py-1 hover:invert' onClick={() => handleCancelProject("Project Name 1")}>Cancel</button>
                            </div>
                        </div>
                        <div className="w-20 rounded">
                            <img src="public\img\slides\bean.png" />
                        </div>
                        <div className='flex flex-col gap-2 p-5 border-l'>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase 1
                                    <progress className="progress progress-info w-56" value={100} max="100"></progress>
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase 2
                                    <progress className="progress progress-info w-56" value={100} max="100"></progress>
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase 3
                                    <progress className="progress progress-info w-56" value={75} max="100"></progress>
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase 4
                                    <progress className="progress progress-info w-56" value={0} max="100"></progress>
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase
                                    <progress className="progress progress-info w-56" value={0} max="100"></progress>
                                </p>
                            </div>
                            <button className='border-2 bg-zinc-900 text-white rounded-md px-2 py-1 hover:invert'>Edit</button>
                        </div>
                    </div>
                    <div className={`${theme.ProjectCards}`}>
                        <div className='w-1/2 flex flex-col gap-2 text-center content-between px-5'>
                            <p className="text-info text-lg font-semibold">Lorem adipisicing elit</p>
                            <h2 className="text-info font-condensed text-8xl font-bold">5%</h2>
                            <div className="flex justify-around">
                                <button className='border-2 bg-zinc-900 text-white rounded-md px-2 py-1 hover:invert' onClick={() => handleCompleteProject("Project Name 1")} disabled={completedProjects.includes("Project Name 1")}>Completed</button>
                                <button className='border-2 bg-zinc-900 text-white rounded-md px-2 py-1 hover:invert' onClick={() => handleCancelProject("Project Name 1")}>Cancel</button>
                            </div>
                        </div>
                        <div className="w-20 rounded">
                            <img src="public\img\slides\bean.png" />
                        </div>
                        <div className='flex flex-col gap-2 p-5 border-l'>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase 1
                                    <progress className="progress progress-info w-56" value={25} max="100"></progress>
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase 2
                                    <progress className="progress progress-info w-56" value={0} max="100"></progress>
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase 3
                                    <progress className="progress progress-info w-56" value={0} max="100"></progress>
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase 4
                                    <progress className="progress progress-info w-56" value={0} max="100"></progress>
                                </p>
                            </div>
                            <div className='flex gap-2'>
                                <p className='flex flex-col'>Phase
                                    <progress className="progress progress-info w-56" value={0} max="100"></progress>
                                </p>
                            </div>
                            <button className='border-2 bg-zinc-900 text-white rounded-md px-2 py-1 hover:invert'>Edit</button>
                        </div>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus font-display border border-zinc-800 bg-zinc-900">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title bg-zinc-900 tracking-tight text-lg peer-checked:bg-zinc-700 peer-checked:text-white">
                        Completed Projects
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
        </div>
    );

    const [template, setTemplate] = useState({
        Name: '',
        Description: '',
        ImagePath: '',
        PreviewPath: '',
    });

    const [errorsTemplate, setErrorsinTemplate] = useState({
        Name: '',
        Description: '',
        ImagePath: '',
        PreviewPath: '',
    });

    const handleChangeinT = (e) => {
        const { name, value } = e.target;
        setTemplate({ ...template, [name]: value });
        if (name === 'Name') {
            if (!/^[a-zA-Z\s-_]{3,10}$/.test(value)) {
                setErrorsinTemplate({ ...errorsTemplate, Name: 'Template name must be 3-10 characters and contain only letters.' });
            } else {
                setErrorsinTemplate({ ...errorsTemplate, Name: '' });
            }
        }
        if (name === 'Description') {
            if (!/^[a-zA-Z\s-_]{3,35}$/.test(value)) {
                setErrorsinTemplate({ ...errorsTemplate, Description: 'Template Description must be 3-35 characters and contain only letters.' });
            } else {
                setErrorsinTemplate({ ...errorsTemplate, Description: '' });
            }
        }
    };

    const renderAddTemplates = () => (
        <div className="flex flex-col gap-5 h-full">
            <h1 className='font-condensed text-5xl font-bold'>Add Template</h1>
            <form className='w-1/2'>
                <div className="mb-4">
                    <label className="block mb-2">Name</label>
                    <input
                        type="text"
                        name="Name"
                        value={template.Name}
                        onChange={handleChangeinT}
                        className="w-full px-3 py-2 bg-zinc-900 text-white border rounded-md focus:outline-none focus:border-primary"
                    />
                    {errorsTemplate.Name && <span className="text-red-500">{errorsTemplate.Name}</span>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Description</label>
                    <input
                        type="text"
                        name="Description"
                        value={template.Description}
                        onChange={handleChangeinT}
                        className="w-full px-3 py-2 border bg-zinc-900 text-white rounded-md focus:outline-none focus:border-primary"
                    />
                    {errorsTemplate.Description && <span className="text-red-500">{errorsTemplate.Description}</span>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Thumbnail Image</label>
                    <input type="file" id="thumbnail" accept=".png, .jpg, .jpeg" onChange={(e) => setThumbnail(e.target.files[0])} className="border border-white bg-zinc-900 px-3 py-2 rounded-xl" />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Preview</label>
                    <input type="file" id="video" accept=".mp4, .gif" onChange={(e) => setVideo(e.target.files[0])} className="border border-white bg-zinc-900 px-3 py-2 rounded-xl" />
                </div>
                <button type="submit" className="btn bg-zinc-900 text-white hover:invert border-white">Add Template</button>
            </form>
        </div>
    );

    // // Function to delete template
    // const handleDelete = (templateId) => {
    //     // Logic to delete template
    // };

    // Content for manage template

    const renderManageTemplate = () => (
        <div className="container mx-auto px-4">

            {/* Modal for updating template */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form method="dialog">
                        {renderAddTemplates()}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <p className="pt-4 text-white">Press ESC key or click on ✕ button to close</p>
                </div>
            </dialog>

            <h1 className='font-condensed text-5xl font-bold'>Manage Templates</h1>
            <div className='flex w-full gap-2'>
                <div className={`${theme.HomeCards}`}>
                    <div className='flex flex-col gap-2 text-center'>
                        <div className="text-[#CDEA68] text-lg font-semibold">Template Added</div>
                        <div className="text-[#CDEA68] font-condensed text-8xl font-bold">1</div>
                    </div>
                </div>
                <div className={`${theme.HomeCards}`}>
                    <div className='flex flex-col gap-2 text-center'>
                        <div className="text-[#CDEA68] text-lg font-semibold">Total Templates</div>
                        <div className="text-[#CDEA68] font-condensed text-8xl font-bold">10</div>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto pt-5">
                <table className="table">
                    {/* Table Head */}
                    <thead>
                        <tr>
                            <th className='text-display text-lg'>Thumbnail</th>
                            <th className='text-display text-lg'>Name</th>
                            <th className='text-display text-lg'>Description</th>
                            <th className='text-display text-lg'>Actions</th>
                        </tr>
                    </thead>
                    {/* Table Body */}
                    <tbody>
                        <tr>
                            <td>
                                <img src="img\slides\bean.png" alt="Thumbnail" className="w-25 h-16" />
                            </td>
                            <td>Sketch</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio doloremqu</td>
                            <td>
                                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-zinc-700 text-white px-4 py-2 rounded-md mr-2">Update</button>
                                <button onClick={() => handleDelete(1)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="img\slides\zoom.png" alt="Thumbnail" className="w-25 h-16" />
                            </td>
                            <td>Sketch</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio doloremqu</td>
                            <td>
                                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-zinc-700 text-white px-4 py-2 rounded-md mr-2">Update</button>
                                <button onClick={() => handleDelete(2)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="img\slides\bean.png" alt="Thumbnail" className="w-25 h-16" />
                            </td>
                            <td>Sketch</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                            <td>
                                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-zinc-700 text-white px-4 py-2 rounded-md mr-2">Update</button>
                                <button onClick={() => handleDelete(3)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="img\slides\spotify.png" alt="Thumbnail" className="w-25 h-16" />
                            </td>
                            <td>Sketch</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio doloremqu</td>
                            <td>
                                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-zinc-700 text-white px-4 py-2 rounded-md mr-2">Update</button>
                                <button onClick={() => handleDelete(4)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="img\slides\netflix.png" alt="Thumbnail" className="w-25 h-16" />
                            </td>
                            <td>Sketch</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio doloremqu</td>
                            <td>
                                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-zinc-700 text-white px-4 py-2 rounded-md mr-2">Update</button>
                                <button onClick={() => handleDelete(5)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="img\slides\swip.png" alt="Thumbnail" className="w-25 h-16" />
                            </td>
                            <td>Sketch</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio doloremqu</td>
                            <td>
                                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-zinc-700 text-white px-4 py-2 rounded-md mr-2">Update</button>
                                <button onClick={() => handleDelete(6)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="img\slides\roadmap.png" alt="Thumbnail" className="w-25 h-16" />
                            </td>
                            <td>Sketch</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio doloremqu</td>
                            <td>
                                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-zinc-700 text-white px-4 py-2 rounded-md mr-2">Update</button>
                                <button onClick={() => handleDelete(7)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="img\slides\neon.png" alt="Thumbnail" className="w-25 h-16" />
                            </td>
                            <td>Sketch</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio doloremqu</td>
                            <td>
                                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-zinc-700 text-white px-4 py-2 rounded-md mr-2">Update</button>
                                <button onClick={() => handleDelete(8)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="img\slides\zoom.png" alt="Thumbnail" className="w-25 h-16" />
                            </td>
                            <td>Sketch</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio doloremqu</td>
                            <td>
                                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-zinc-700 text-white px-4 py-2 rounded-md mr-2">Update</button>
                                <button onClick={() => handleDelete(9)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img src="img\slides\swip_x.png" alt="Thumbnail" className="w-25 h-16" />
                            </td>
                            <td>Sketch</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio doloremqu</td>
                            <td>
                                <button onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-zinc-700 text-white px-4 py-2 rounded-md mr-2">Update</button>
                                <button onClick={() => handleDelete(10)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                            </td>
                        </tr>
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
            avatar: 'img/social/rooler.jpg',
        },
        {
            id: 2,
            name: 'Jane Smith',
            avatar: 'img/social/rooler.jpg',
        },
        {
            id: 3,
            name: 'Michael Johnson',
            avatar: 'img/social/rooler.jpg',
        },
    ]);

    const totalUsers = users.length;

    const renderManageUser = () => (
        <div>
            <div className="container mx-auto px-4">
                <h1 className='font-condensed text-5xl font-bold'>Manage Users</h1>
                <div className='flex flex-col w-full gap-2 py-5 rounded-xl bg-zinc-900 items-center'>
                    <h1 className="text-[#CDEA68] text-lg font-semibold">Total Users</h1>
                    <h1 className="text-[#CDEA68] font-condensed text-8xl font-bold">{totalUsers}</h1>
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

                <div className="overflow-x-auto pt-5">
                    <table className="table">
                        {/* Table Head */}
                        <thead>
                            <tr>
                                <th className='text-display text-lg'>Profile Picture</th>
                                <th className='text-display text-lg'>Name</th>
                                <th className='text-display text-lg'>Email</th>
                                <th className='text-display text-lg'>Actions</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            <tr>
                                <td>
                                    <img src="img\social\rooler.jpg" alt="User 1" className="size-20 rounded-full" />
                                </td>
                                <td>Aurther Morgen</td>
                                <td>aurther@gmail.com</td>
                                <td>
                                    <button onClick={() => handleDelete(1)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="img\social\rooler.jpg" alt="User 1" className="size-20 rounded-full" />
                                </td>
                                <td>John Marshton</td>
                                <td>johnmarsh@gmail.com</td>
                                <td>
                                    <button onClick={() => handleDelete(1)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="img\social\rooler.jpg" alt="User 1" className="size-20 rounded-full" />
                                </td>
                                <td>Sean</td>
                                <td>sean@gmail.com</td>
                                <td>
                                    <button onClick={() => handleDelete(1)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

    const totalReviews = 3;

    const renderManageReview = () => (
        <div>
            <div className="container mx-auto px-4">
                <h1 className='font-condensed text-5xl font-bold'>Manage Users</h1>
                <div className='flex flex-col w-full gap-2 pt-5 rounded-xl bg-zinc-900 items-center'>
                    <h1 className="text-[#CDEA68] text-lg font-semibold">Total Reviews</h1>
                    <h1 className="text-[#CDEA68] font-condensed text-8xl font-bold">{totalReviews}</h1>
                </div>

                <div className="overflow-x-auto pt-5">
                    <table className="table">
                        {/* Table Head */}
                        <thead>
                            <tr>
                                <th className='text-display text-lg'>Id</th>
                                <th className='text-display text-lg'>Name</th>
                                <th className='text-display text-lg'>Review</th>
                                <th className='text-display text-lg'>Actions</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Aurther Morgen</td>
                                <td>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ex facilis iure delectus</td>
                                <td>
                                    <button onClick={() => handleDelete(1)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>John Marshton</td>
                                <td>Lorem ipsum dolor sit amet consectetur Praesentium excepturi culpa sunt velit omnis qui doloribus debitis quam? Illum eligendi amet necessitatibus accusamus?</td>
                                <td>
                                    <button onClick={() => handleDelete(1)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    3
                                </td>
                                <td>Sean</td>
                                <td>Lorem consectetur adipisicing elit. Nulla, accusamus. Corporis cum dolorem temporibus est voluptas porro illo quibusdam commodi quisquam.</td>
                                <td>
                                    <button onClick={() => handleDelete(1)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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
                            className={`${theme.SidebarItems} ${selectedItem === 'Add Template' ? 'bg-zinc-800 rounded-l-xl' : ''}`}
                            onClick={() => handleItemClick('Add Template')}
                        >
                            Add Template
                        </li>
                        <li
                            className={`${theme.SidebarItems} ${selectedItem === 'Manage Templates' ? 'bg-zinc-800 rounded-l-xl' : ''}`}
                            onClick={() => handleItemClick('Manage Templates')}
                        >
                            Manage Templates
                        </li>
                        <li
                            className={`${theme.SidebarItems} ${selectedItem === 'Manage User' ? 'bg-zinc-800 rounded-l-xl' : ''}`}
                            onClick={() => handleItemClick('Manage User')}
                        >
                            Manage User
                        </li>
                        <li
                            className={`${theme.SidebarItems} ${selectedItem === 'Manage Review' ? 'bg-zinc-800 rounded-l-xl' : ''}`}
                            onClick={() => handleItemClick('Manage Review')}
                        >
                            Manage Review
                        </li>
                        <li
                            className={`${theme.SidebarItems} ${selectedItem === 'Manage Profile' ? 'bg-zinc-800 rounded-l-xl' : ''}`}
                            onClick={() => handleItemClick('Manage Profile')}
                        >
                            Manage Profile
                        </li>
                    </ul>
                </div>
            </div>
            {/* Content */}
            <div className="flex-1 bg-zinc-800 rounded-l-xl p-10">
                {selectedItem === 'Home' && renderHomeContent()}
                {selectedItem === 'Projects' && renderProjectsContent()}
                {selectedItem === 'Add Template' && renderAddTemplates()}
                {selectedItem === 'Manage Templates' && renderManageTemplate()}
                {selectedItem === 'Manage User' && renderManageUser()}
                {selectedItem === 'Manage Review' && renderManageReview()}
                {selectedItem === 'Manage Profile' && <RenderAdminProfile />}
            </div>
        </div>
    )
}

export default Admin