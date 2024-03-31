import React from 'react'

function Meet() {
    return (
        <div className='w-full bg-zinc-900] block py-10'>
            <h1 className='font-condensed text-8xl text-center pt-10'>How we engage with client</h1>
            <div className='container flex gap-10 items-center justify-around'>
                <img className='rounded-xl' src="img/asserts/call.jpg" alt="" />
                <p className='text-center'>Meeting with Client</p>
            </div>
            <div className='container flex gap-10 items-center justify-around'>
                <p className='text-center'>Showing work Progress and template</p>
                <img className='rounded-xl' src="img/asserts/work.jpg" alt="" />
            </div>
        </div>
    )
}

export default Meet