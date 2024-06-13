import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { TbReport } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { CgComponents } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

type menu = {
    id: string,
    name: string,
    link: string,
    icon?: JSX.Element,
    nested?: boolean,
    child?: menu[]
}

type menusType = menu[]
function SideBar() {
    const dashBoardItems: menusType = [
        {
            id: '1',
            name: 'پنل کاربری',
            link: '/dashboard',
            icon: <MdDashboard size={24} />,
            nested: false
        },
        {
            id: '2',
            name: 'کاربران ',
            link: '/users',
            icon: <FaUsers size={24} />,
            nested: false
        },
        {
            id: '3',
            name: 'وبلاگ',
            link: '#',
            icon: <FaBlog size={24} />,
            nested: false
        },
        {
            id: '4',
            name: 'محصولات',
            link: '/product',
            icon: <MdOutlineProductionQuantityLimits size={24} />,
            nested: false
        },
        {
            id: '5',
            name: 'دسته بندی ها',
            link: '#',
            icon: <BiSolidCategory size={24} />,
            nested: false
        },
        {
            id: '6',
            name: 'گزارشات',
            link: '#',
            icon: <TbReport size={24} />,
            nested: false
        },
        {
            id: '7',
            name: 'کامپوننت ها',
            link: '',
            icon:<CgComponents size={24} />,
            nested: true,
            child: [{
                id: 'c1-7',
                name: 'دکمه ها',
                link: '/buttons',
            },
            {
                id: 'c2-7',
                name: 'فرم  ها',
                link: '/forms',
            },
            {
                id: 'c3-7',
                name: ' اسلایدر ها',
                link: '/slider',
            },
            {
                id: 'c4-7',
                name: ' مدال ها',
                link: '/modals',
            },
            {
                id: 'c5-7',
                name: ' کارد ها',
                link: '/cards',
            },
            {
                id: 'c6-7',
                name: ' هدر ها',
                link: '/headers',
            },
            {
                id: 'c6-7',
                name: 'Toast',
                link: '/Toasts',
            },
            ]
        },
    ]
    return (
        <div className='bg-Navy-blue mx-2 rounded-2xl my-2 w-64  '>
            {/*<p className='text-wihte bg-black p-6 font-semibold text-2xl'>داشبورد</p>*/}
            <div className='flex flex-col'>
                {dashBoardItems && dashBoardItems.map((menu) => (
                    <div key={menu.id}>
                        <Link className='flex relative items-center text-wihte p-6 text-base font-medium mr-2' key={menu.id} to={menu.link}>
                            <span className='ml-4'>{menu.icon}</span>
                            <span>{menu.name}</span>
                           {menu.nested&&<span className='absolute left-4'> { <IoIosArrowDown  size={18}/>}</span>}

                        </Link>
                        {menu.nested && <ul className=' flex flex-col px-6 py-0'>
                            {menu.child?.map((child) => (
                                <li key={child.id}>
                                    <Link  className='flex items-center text-wihte p-4 text-base font-medium mr-4' to={child.link}>
                                        {child.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideBar