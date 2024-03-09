import React from 'react'
import { MdDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { TbReport } from "react-icons/tb";
import { Link } from 'react-router-dom';

type menu = {
    id: string,
    name: string,
    link: string,
    icon:JSX.Element
}
type menusType = menu[]
function SideBar() {
    const dashBoardItems: menusType = [
        {
            id: '1',
            name: 'پنل کاربری',
            link: '/dashboard',
            icon:<MdDashboard size={24}/>
        },
        {
            id: '2',
            name: 'کاربران ',
            link: '#',
            icon:<FaUsers  size={24}/>
        },
        {
            id: '3',
            name: 'وبلاگ',
            link: '#',
            icon:<FaBlog size={24}/>
        },
        {
            id: '4',
            name: 'محصولات',
            link: '/product',
            icon:<MdOutlineProductionQuantityLimits size={24}/>
        },
        {
            id: '5',
            name: 'دسته بندی ها',
            link: '#',
            icon:<BiSolidCategory size={24}/>
        },
        {
            id: '6',
            name: 'گزارشات',
            link: '#',
            icon:<TbReport size={24}/>
        },
    ]
    return (
        <div className='bg-Navy-blue mx-2 rounded-2xl my-2 w-64  '>
            {/*<p className='text-wihte bg-black p-6 font-semibold text-2xl'>داشبورد</p>*/}
            <div className='flex flex-col'>
                {dashBoardItems && dashBoardItems.map((menu) => (
                    <Link className='flex items-center text-wihte p-6 text-base font-medium mr-2' key={menu.id} to={menu.link}>
                        <span className='ml-4'>{menu.icon}</span>
                        <span>{menu.name}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SideBar