import React, { useState } from 'react'
import MenuButton from './MenuButton'
import Navbar from './Navbar';
import Search from './Search';
import Postcard from './Postcard';

export default function Base() {
    const [open, setOpen] = useState(false);
  return (
    <>
    <div className='sm:hidden p-2'>
        <MenuButton open={open} setOpen={setOpen}/>
    </div>
    <div className='flex'>
      <div className=' hidden sm:block sm:w-[25%]'>
        <div className={`${!open ? "block":"hidden" } mt-5`}>
            <Navbar/>
        </div>
      </div>
      <div className="border w-full sm:w-[50%] overflow-y-auto max-h-screen p-2 flex flex-col">

        <div className={`${open ? "block":"hidden" } sm:hidden`}>
            <Navbar/>
        </div>
        <div><Search/></div>
        <Postcard/>
        <div>center</div>
        
        </div>
      <div className='border hidden sm:block  sm:w-[25%]'>right</div>
    </div>
    </>
  )
}
