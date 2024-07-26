import React, { useState } from 'react'
import { menuSiteLogo, NavbarWidthSearchType } from './Header.basic';
import { Link } from 'react-router-dom';
type NavbarWidthSearchProps = {
    menuList: NavbarWidthSearchType[];
    headerLogo: menuSiteLogo,
    boxShadow?: boolean,
    fullWidth?: boolean,
    menuFix?: boolean,
    leftBox?: any,
    setHeaderSearch?: React.Dispatch<React.SetStateAction<string>>
};
const NavbarWidthSearch: React.FC<NavbarWidthSearchProps> = ({ menuList, headerLogo, boxShadow, fullWidth, menuFix, leftBox }) => {
    const [showMwenu, setShowMwenu] = useState(false)
    const openModal = () => {
        setShowMwenu((prev) => !prev)
    }
    return (
        <>
            <nav className={`${showMwenu? 'h-[100dvh]':'h-auto'}  ${menuFix && 'fixed w-full top-0 right-0 left-0 z-50'} bg-white border-gray-200 dark:bg-gray-900 ${fullWidth ? 'px-8' : 'px-20 md:px-10 sm:px-0'} ${boxShadow && 'shadow-[0_3px_10px_rgb(0,0,0,0.2)]'}`}>
                <div className=" w-full flex flex-wrap min-h-16 justify-between mx-auto ">
                    <Link to={headerLogo.homeUrl} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={headerLogo.logSrc} className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{headerLogo.siteName}</span>
                    </Link>

                    <div className='items-center flex items-center md:hidden'>
                        <button onClick={openModal} data-collapse-toggle="navbar-search" type="button" className="inline-flex  p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={`items-center justify-between ${showMwenu ? 'flex flex-col' : 'hidden'} w-full md:flex md:w-auto md:order-0`} id="navbar-search">

                        <ul className="flex flex-col p-4 h-full items-center w-full md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {menuList?.map((menu) => (

                                <li key={menu.id} className='group mb-4 h-full flex items-center md:mb-0 relative'>
                                    <Link to={menu.url} className="   block py-2 px-3  rounded md:bg-transparent text-blue-700 md:p-0 dark:text-blue-500" >{menu.title}</Link>
                                    <ul className='absolute w-fit min-w-36 top-[100%] right-0 group-hover:flex flex-col  hidden shadow-[0_3px_10px_rgb(0,0,0,0.2)] px-4 bg-blue-500 rounded-lg'>
                                        {menu.nestedMenu?.map((item) => (

                                            <li key={item.id} className='mb-4 md:my-4'>
                                                <Link to={item.url} className="block whitespace-nowrap py-2 px-3  rounded md:bg-transparent text-white hover:text-wihte md:p-0 dark:text-blue-500" >{item.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                            <div className='flex md:hidden items-center'>{leftBox} </div>
                        </ul>
                    </div>
                    <div className='hidden md:flex items-center'>{leftBox} </div>
                </div>
            </nav>

        </>
    )
}

export default NavbarWidthSearch