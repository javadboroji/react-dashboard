import React, { useState } from 'react'
import { menuSiteLogo, NavbarWidthSearchType } from '../Components/Header/Header.basic'
import NavbarWidthSearch from '../Components/Header/NavbarWidthSearch'
import { Button, Drawer } from 'antd'
import { FaSignOutAlt } from 'react-icons/fa'
import { useAppContext } from '../../Context/UserProvider'
import { Link } from 'react-router-dom'
import Products from './Products'
import { FaShoppingCart } from "react-icons/fa";
import ShoppingCart from './ShoppingCart'
import Footer from './Footer'
import SliderImage from './Banner/SliderImage'
import useAddToBasket from '../../store/AddToBasket'
import SpecialSale from './SpecialSale/SpecialSale'
import { useGetAllProducts } from '../../Hooks'
import Stories from './Stories/Stories'

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
            url: '/filter',
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
        siteName: 'وب سام',
        logSrc: 'https://flowbite.com/docs/images/logo.svg'
    }


    const { userLogin } = useAppContext();

    /*================================ Drawer ==============================*/
    const baskateData = useAddToBasket(state => state.products);

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const { data, isLoading, isSuccess } = useGetAllProducts()

    return (
        <div className='flex flex-col justify-between min-h-[100dvh]'>
            <div className=' '>
                <NavbarWidthSearch menuFix menuList={menuList} headerLogo={headerLogo} boxShadow={true} fullWidth={true} leftBox={userLogin ?
                    <Button className='flex items-center border-0 shadow-none'> <Link to={'/login'} className='mx-4'>خروج</Link><FaSignOutAlt size={24} color='rgb(29 78 216 )' /></Button> :
                    <>
                        <Button onClick={showDrawer} className=' flex items-center border-0 shadow-none'><span className='absolute left-[60%] text-wihte top-0 bg-sucess-text w-4 h-4 rounded-full'>{baskateData ? baskateData.length : 0}</span> <FaShoppingCart size={24} color='rgb(29 78 216 )' /></Button>
                        <Button className=' flex items-center border-0 shadow-none'> <Link to={'/login'} className='mx-4'>ورود</Link><FaSignOutAlt size={24} color='rgb(29 78 216 )' /></Button>
                    </>
                } />
            </div>
            {/* /*-------------------------------- Swiper ------------------------------*/}
            <SliderImage />
            {/* /*================================ Stories ==============================*/}
            <Stories />
            {/*============================== Products Cards==========================================*/}
            <Products data={data} isLoading={isLoading} isSuccess={isSuccess} />
            {/*============================== special sele==========================================*/}
            <SpecialSale />

            <Drawer title="Cart" onClose={onClose} open={open}>
                <ShoppingCart />
            </Drawer>
            {/*============================== Footer ==========================================*/}
            <Footer />
        </div>
    )
}

export default HomePage