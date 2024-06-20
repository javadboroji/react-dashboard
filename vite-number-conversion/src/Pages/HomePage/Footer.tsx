import React, { JSXElementConstructor } from 'react'
import { IoLogoJavascript } from "react-icons/io";
import { FaFacebookF, FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaGooglePlusG, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { menuSiteLogo, NavbarWidthSearchType } from '../Components/Header/Header.basic';
import { FooterBlog } from '../Components/Footers/Footer.basic';
function Footer() {
    const addres = [
        {

            icon: <MdLocationOn color='white' size={22} />,
            title: 'آدرس',
            description: ' شهرک غرب ، میدان کتاب پلاک 840'
        },
        {

            icon: <MdEmail color='white' size={22} />,
            title: 'ایمیل',
            description: '  javadboroji2222@gmail.com'
        },
        {

            icon: <FaPhoneAlt color='white' size={22} />,
            title: 'شماره تماس',
            description: '09392409359'
        }
    ]
    const menuList: NavbarWidthSearchType[] = [
        {
            id: 'f-1',
            title: 'درباره ما',
            url: '/',

        },
        {
            id: 'f-2',
            title: 'تماس با ما',
            url: '/',

        },
        {
            id: 'f-3',
            title: 'خدمات',
            url: '/',
            hasNested: true,

        },
        {
            id: 'f-4',
            title: 'خانه',
            url: '/',

        },

    ]
    return (
       <div className='flex flex-col w-full mt-4'>
         <FooterBlog
            siteTitle={<p className='text-yellow-400'>وب سام</p>}
            logo={<img src='https://flowbite.com/docs/images/logo.svg' />}
            footerDescription='تمامی حقوق مادی و معنوی این سایت متعلق به ....  می باشد و هرگونه کپی برداری غیرقانونی محسوب خواهد شد'
            social={[<FaTelegram color='white' size={22}/>, <FaInstagram color='white' size={22} />, <FaTwitter color='white' size={22} />, <IoLogoWhatsapp  color='white' size={22}/>]}
            addres={addres}
            siteDescription='   لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ'
            menu={menuList}
            footerBackgeround='bg-black '
            textColor='text-yellow-400'
        />
       </div>
    )
}

export default Footer