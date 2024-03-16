import React, { useState } from 'react';
import CustomBtn from './raw/CustomBtn'

function Login() {
    const [activeForm, setActiveForm] = useState('sign-in');

    const toggleForm = () => {
        setActiveForm(activeForm === 'sign-in' ? 'sign-up' : 'sign-in');
    };

    // function handleCredentialResponse(response) {
    //     console.log("Encoded JWT ID token: " + response.credential);
    // }

    // window.onload = function () {
    //     google.accounts.id.initialize({
    //         client_id: "YOUR_GOOGLE_CLIENT_ID",
    //         callback: handleCredentialResponse
    //     });
    //     google.accounts.id.renderButton(
    //         document.getElementById("buttonDiv"),
    //         { theme: "outline", size: "large" }  // customization attributes
    //     );
    //     google.accounts.id.prompt(); // also display the One Tap dialog
    // }

    return (
        <div className="font-display tracking-tight w-full h-screen bg-cover bg-[url('img\logo\logo.svg')] flex items-center justify-center">
            {/* <div className="container w-1/2 h-3/4 flex bg-[#004D43] rounded-xl backdrop-blur-sm">
                <div className='w-1/2 flex flex-col justify-evenly items-center rounded-xl'>
                    <div className='flex flex-col items-center'>
                        <img className='w-1/4 invert' src="public\img\logo\logo.svg" alt="" />
                        <h1>Welcome to Supreme</h1>
                    </div>
                    <p>Sign in to continue</p>
                </div>
                <div className='w-1/2 flex flex-col justify-evenly items-center text-zinc-900 bg-[#CDEA68] rounded-xl'>
                    <h1>Sign in</h1>
                    <div className='form flex flex-col gap-10'>
                        <label htmlFor="">Email
                            <input type="email" /></label>
                        <label htmlFor="">Password
                            <input type="password" /></label>
                        <input type="submit" value={"Sign In"} />
                    </div>
                    <div className='flex tracking-tighter'>
                        <hr />
                        OR
                        <hr />
                    </div>
                    <button className='w-1/2 border-2 rounded-md py-2 px-2 text-sm font-medium flex gap-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16"><path fill="black" d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301c1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"></path></svg>
                        <span className="truncate">Continue with Google</span>
                    </button>
                    <button className='w-1/2 border-2 rounded-md py-2 px-2 text-sm font-medium flex gap-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="black" d="M11.673 7.222c-.876 0-2.232-.996-3.66-.96c-1.884.024-3.612 1.092-4.584 2.784c-1.956 3.396-.504 8.412 1.404 11.172c.936 1.344 2.04 2.856 3.504 2.808c1.404-.06 1.932-.912 3.636-.912c1.692 0 2.172.912 3.66.876c1.512-.024 2.472-1.368 3.396-2.724c1.068-1.56 1.512-3.072 1.536-3.156c-.036-.012-2.94-1.128-2.976-4.488c-.024-2.808 2.292-4.152 2.4-4.212c-1.32-1.932-3.348-2.148-4.056-2.196c-1.848-.144-3.396 1.008-4.26 1.008m3.12-2.832c.78-.936 1.296-2.244 1.152-3.54c-1.116.048-2.46.744-3.264 1.68c-.72.828-1.344 2.16-1.176 3.432c1.236.096 2.508-.636 3.288-1.572"></path></svg>
                        <span className="truncate">Continue with Apple</span>
                    </button>  
                </div>
            </div> */}
            <div className="container w-1/2 h-3/4 flex bg-[#004D43] rounded-xl backdrop-blur-sm">
                <div className='w-1/2 flex flex-col justify-evenly items-center text-zinc-900 bg-[#CDEA68] rounded-xl'>
                    <h1>Sign Up</h1>
                    <div className='form flex flex-col gap-10'>
                        <label htmlFor="">Name
                            <input type="text" /></label>
                        <label htmlFor="">Email
                            <input type="email" /></label>
                        <label htmlFor="">Password
                            <input type="password" /></label>
                        <label htmlFor="">Re-enter Password
                            <input type="password" /></label>
                        <input type="submit" value={"Sign Up"} />
                    </div>
                    <div className='flex tracking-tighter'>
                        <hr />
                            OR
                        <hr />
                    </div>
                    <button className='w-1/2 border-2 rounded-md py-2 px-2 text-sm font-medium flex gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 16 16"><path fill="black" d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301c1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"></path></svg>
                        <span className="truncate">Continue with Google</span>
                    </button>
                    <button className='w-1/2 border-2 rounded-md py-2 px-2 text-sm font-medium flex gap-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"><path fill="black" d="M11.673 7.222c-.876 0-2.232-.996-3.66-.96c-1.884.024-3.612 1.092-4.584 2.784c-1.956 3.396-.504 8.412 1.404 11.172c.936 1.344 2.04 2.856 3.504 2.808c1.404-.06 1.932-.912 3.636-.912c1.692 0 2.172.912 3.66.876c1.512-.024 2.472-1.368 3.396-2.724c1.068-1.56 1.512-3.072 1.536-3.156c-.036-.012-2.94-1.128-2.976-4.488c-.024-2.808 2.292-4.152 2.4-4.212c-1.32-1.932-3.348-2.148-4.056-2.196c-1.848-.144-3.396 1.008-4.26 1.008m3.12-2.832c.78-.936 1.296-2.244 1.152-3.54c-1.116.048-2.46.744-3.264 1.68c-.72.828-1.344 2.16-1.176 3.432c1.236.096 2.508-.636 3.288-1.572"></path></svg>
                        <span className="truncate">Continue with Apple</span>
                    </button>
                </div>
                <div className='w-1/2 flex flex-col justify-evenly items-center rounded-xl'>
                    <div className='flex flex-col items-center'>
                        <img className='w-1/4 invert' src="img\logo\logo.svg" alt="" />
                        <h1>Welcome to Supreme</h1>
                    </div>
                    <p>Signed Up already?<a href="">sign in</a> instead</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
