import React from 'react'
import { menuSiteLogo, NavbarWidthSearchType } from '../Components/Header/Header.basic'
import NavbarWidthSearch from '../Components/Header/NavbarWidthSearch'
import { Button } from 'antd'
import { FaSignOutAlt } from 'react-icons/fa'
import { useAppContext } from '../../Context/UserProvider'
import { Link } from 'react-router-dom'
import { useGetAllProducts } from '../../Hooks'
import Product from '../Product/Product'
import Products from './Products'

function HomePage() {
    const menuList: NavbarWidthSearchType[] = [
        {
            id: 's-1',
            title: 'درباره ما',
            url: '/',

        },
        {
            id: 's-2',
            title: 'تماس با ما',
            url: '/',

        },
        {
            id: 's-3',
            title: 'محصولات',
            url: '/',
            hasNested: true,
            nestedMenu: [
                {
                    id: 'ss-1',
                    title: 'لباس',
                    url: '/',

                },
                {
                    id: 'ss-2',
                    title: 'کیف وکفش',
                    url: '/',

                },
                {
                    id: 'ss-3',
                    title: 'ساعت',
                    url: '/',

                },
                {
                    id: 'ss-4',
                    title: 'زیور الات',
                    url: '/',

                },
            ]
        },
        {
            id: 's-4',
            title: 'خانه',
            url: '/',

        },

    ]
    const headerLogo: menuSiteLogo = {
        homeUrl: '/',
        siteName: 'فرانت کامپوننت',
        logSrc: 'https://flowbite.com/docs/images/logo.svg'
    }
    const { userLogin } = useAppContext();

 
    
    return (
        <div>
            <div className=' w-full'>
                <NavbarWidthSearch menuFix menuList={menuList} headerLogo={headerLogo} boxShadow={true} fullWidth={true} leftBox={userLogin ? 
                <Button className='flex items-center border-0 shadow-none'> <Link to={'/login'} className='mx-4'>خروج</Link><FaSignOutAlt size={24} color='rgb(29 78 216 )' /></Button> :
                <Button className=' flex items-center border-0 shadow-none'> <Link to={'/login'} className='mx-4'>ورود</Link><FaSignOutAlt size={24} color='rgb(29 78 216 )' /></Button> 
                } />
            </div>
            {/*============================== Products Cards==========================================*/   }
            <Products/>
        </div>
    )
}

export default HomePage