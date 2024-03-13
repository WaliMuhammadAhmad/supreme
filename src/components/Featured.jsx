import React from 'react'
import Slides from './Slides'
import CS from './CS'

function Featured() {

    return (
        <div className='py-20 rounded-tl-3xl rounded-tr-3xl'>
            <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
                <h1 className='text-7xl capitalize font-["Neue_Montreal"] tracking-tight'>Featured Projects</h1>
            </div>
            <Slides />
            <CS />
        </div>
    )
}

export default Featured