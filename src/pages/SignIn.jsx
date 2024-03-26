import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className="font-display tracking-tight w-full h-screen bg-[url('img\logo\logo.svg')] flex items-center justify-center">
    <div className="lg:w-1/4 lg:h-3/4 flex flex-col justify-evenly items-center rounded-xl bg-[#CDEA68]">
            <h1 className='font-condensed lg:text-5xl text-zinc-900'>Sign In</h1>
        {/* Sign up form */}
            <form className="max-w-md mx-auto">
                <div className="relative z-0 lg:w-60 md:w-60 sm:w-60 mb-5 group">
                    <input type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer" placeholder=" " required />
                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 lg:w-60 md:w-60 sm:w-60 mb-5 group">
                    <input type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-zinc-900 bg-transparent border-0 border-b-2 border-zinc-700 appearance-none dark:text-white dark:border-zinc-900 dark:focus:border-zinc-900 focus:outline-none focus:ring-0 focus:border-zinc-900 peer" placeholder=" " required />
                    <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-zinc-900 dark:text-zinc-900 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-zinc-900 peer-focus:dark:text-zinc-900 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                </div>
                <input type="submit" value={"Sign Up"} className="w-full py-2.5 px-5 text-sm font-medium border-2 text-zinc-900 border-zinc-900 rounded-md hover:bg-zinc-900 hover:text-white focus:outline-none focus:ring-0 focus:border-zinc-900" />
            </form>
        <Link to="/signup" className="text-zinc-900">Not register yet? Sign up</Link>
    </div>
</div>
  )
}

export default SignIn