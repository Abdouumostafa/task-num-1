import {IoMdContact} from 'react-icons/io';
import {FaBars, FaRegWindowClose} from 'react-icons/fa'
import { useState } from 'react';

const Navbar = () => {
    const [openSidebar, setOpenSidebar] = useState(false)

  return (
    <div className="bg-white h-auto px-10 py-6 flex justify-between items-center shadow-md w-full relative">
        <div className={openSidebar? `text-red-600 text-[24px] cursor-pointer md:hidden block`: ` text-blue-600 text-[24px] cursor-pointer md:hidden block`} onClick={()=> setOpenSidebar(!openSidebar)}>{openSidebar? <FaRegWindowClose /> : <FaBars />}</div>
        <ul className={openSidebar? ' shadow-md z-50 md:hidden flex flex-col list-none gap-[30px] justify-center items-center font-bold text-[18px] bg-white absolute bottom-[-430px] py-[20px] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full': 'hidden'}>
            <li className='cursor-pointer'>الرئيسية</li>
            <li className='cursor-pointer'>من نحن</li>
            <li className='cursor-pointer'>العروض</li>
            <li className='cursor-pointer'>تقسيط</li>
            <li className='cursor-pointer'>اتصل بنا</li>
        </ul>
        <h1 className="font-bold text-[26px] cursor-pointer">Logo</h1>
        <ul className='md:flex hidden list-none gap-[40px] justify-center items-center font-bold text-[18px]'>
            <li className='cursor-pointer'>الرئيسية</li>
            <li className='cursor-pointer'>من نحن</li>
            <li className='cursor-pointer'>العروض</li>
            <li className='cursor-pointer'>تقسيط</li>
            <li className='cursor-pointer'>اتصل بنا</li>
        </ul>
        <div className="text-[34px] cursor-pointer"><IoMdContact /></div>
    </div>
  )
}
export default Navbar