import { Col, Row } from 'antd'
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
import { NavbarWidthSearchType } from '../Header/Header.basic';

function FooterBasic() {
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
            logo={<IoLogoJavascript color='white' size={28}/>}
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

export default FooterBasic
export type addresType = {
    icon: JSX.Element,
    title: string,
    description: string
}
export type FooterBlogType = {
    footerBackgeround:string,
    logo: JSX.Element,
    siteTitle: JSX.Element,
    siteDescription: string,
    social: JSX.Element[],
    menu: NavbarWidthSearchType[],
    addres: addresType[],
    footerDescription: string
    textColor?:string,
    descriptionColor?:string
    MenuTextExtendtextColor?:true
}
const FooterBlog: React.FC<FooterBlogType> = (props) => {

    return (
        <footer className={`${props.footerBackgeround} w-full lg:max-h-[20rem] h-fit`}>
            <div className='container px-4 mx-auto py-8'>
                <Row gutter={[16, 16]}>
                    <Col xs={24} lg={8}>
                        <div className='flex items-center'>
                            {props.logo}
                            <span className='text-2xl text-white px-4 '> {props.siteTitle} </span>
                        </div>
                        <div className='pt-4'>
                            <p className={`${props.descriptionColor?props.descriptionColor:'text-white'} text-sm leading-5`}>
                                {props.siteDescription}
                            </p>
                        </div>
                        <div className='flex justify-between items-center pt-4  lg:w-1/2'>
                            {props.social?.map((item, i) => {
                                return <Link key={i} to={'/'}>{item}</Link>
                            })}


                        </div>
                    </Col>
                    <Col xs={24} lg={8}>
                        <ul className=''>
                            {
                                props.menu?.map((item, i) => {
                                    return <li key={`menu-${i}`} className='flex justify-center mx-auto py-2'>
                                        <Link className={`${props.textColor&&props.MenuTextExtendtextColor?props.textColor:'text-white '} font-semibold text-base`} to={item.url}> {item.title}</Link>
                                    </li>
                                })
                            }


                        </ul>
                    </Col>
                    <Col xs={24} lg={8} >
                        {props.addres?.map((item, i) => {
                            return <div key={`addres-${i}`} className='flex items-center py-4'>
                                <div>
                                    {item.icon}
                                </div>
                                <div className='flex flex-col px-2'>
                                    <span className={`${props.textColor?props.textColor:'text-white '} font-semibold text-base`}> {item.title}</span>
                                    <span className={`${props.descriptionColor?props.descriptionColor:'text-white '} font-semibold text-sm`}> {item.description}</span>
                                </div>
                            </div>
                        })}


                    </Col>
                    <Col xs={24} >
                        <span className={`${props.descriptionColor?props.descriptionColor:'text-white '} text-center block`}> {props.footerDescription}</span>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}
export{FooterBlog}

