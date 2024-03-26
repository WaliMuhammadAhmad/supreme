import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SwipBtn from '../components/raw/SwipBtn';

function Login() {

    const [isAnimationActive, setIsAnimationActive] = useState(false);

    //Validation for the form


    return (
        // <div className="font-display tracking-tight w-full h-screen bg-[url('C:\Users\wali\Documents\Project\supreme\public\img\logo\logo.svg')] flex items-center justify-center">
        //     <div className="container w-1/2 h-3/4 flex bg-[#004D43] rounded-xl">
        //         {/* Sign up form */}
        //         <div className='w-1/2 flex flex-col justify-evenly items-center rounded-xl'>
        //             <form className="max-w-md mx-auto">
        //                 <div className="grid md:grid-cols-2 md:gap-6">
        //                     <div className="relative z-0 w-full mb-5 group">
        //                         <input type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer" placeholder=" " required />
        //                         <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
        //                     </div>
        //                     <div className="relative z-0 w-full mb-5 group">
        //                         <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer" placeholder=" " required />
        //                         <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
        //                     </div>
        //                 </div>
        //                 <div className="relative z-0 w-full mb-5 group">
        //                     <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer" placeholder=" " required />
        //                     <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        //                 </div>
        //                 <div className="relative z-0 w-full mb-5 group">
        //                     <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer" placeholder=" " required />
        //                     <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        //                 </div>
        //                 <div className="relative z-0 w-full mb-5 group">
        //                     <input type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer" placeholder=" " required />
        //                     <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
        //                 </div>
        //                 <input type="submit" value={"Sign Up"} className="w-full py-2.5 px-5 text-sm font-medium border-2 text-zinc-900 border-zinc-900 rounded-md hover:bg-zinc-900 hover:text-white focus:outline-none focus:ring-0 focus:border-zinc-900" />
        //             </form>
        //         </div>
        //         {/* Sign in form */}
        //         <div className='w-1/2 flex flex-col justify-evenly items-center rounded-xl'>
        //             <form className="max-w-md mx-auto">
        //                 <div className="grid">
        //                     <div className="relative z-0 w-full mb-5 group">
        //                         <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer" placeholder=" " required />
        //                         <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        //                     </div>
        //                     <div className="relative z-0 w-full mb-5 group">
        //                         <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer" placeholder=" " required />
        //                         <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        //                     </div>
        //                 </div>
        //                 <input type="submit" value={"Sign In"} className="w-full py-2.5 px-5 text-sm font-medium border-2 uppercase text-zinc-900 border-zinc-900 rounded-md hover:bg-zinc-900 hover:text-white focus:outline-none focus:ring-0 focus:border-zinc-900" />
        //             </form>
        //         </div>
        //         {/* Animation page that float over the pages*/}
        //         <motion.div
        //             initial={{ translateX: "0%" }}
        //             animate={{ translateX: isAnimationActive ? "0%" : "100%" }}
        //             transition={{ ease: "easeOut", duration: 1, delay: 0.5 }}
        //             className='absolute w-1/4 h-3/4 flex flex-col justify-center gap-10 text-zinc-900 bg-[#CDEA68] rounded-xl'
        //         >
        //             <div className='flex flex-col items-center'>
        //                 <img className='w-1/4' src="img\logo\logo.svg" alt="" />
        //                 <h1>Welcome to Supreme</h1>
        //             </div>
        //             <div className='flex flex-col items-center gap-5'>
        //                 <p>Not Signed In yet?</p>
        //                 <SwipBtn text='sign up' onClick={() => setIsAnimationActive(!isAnimationActive)} />
        //             </div>
        //         </motion.div>
        //     </div>
        // </div >
        <div>
            
        </div>
    );
}

export default Login;
