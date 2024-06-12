import React, { useState } from 'react'
import NavbarWidthSearch from './NavbarWidthSearch';
import { FaSignOutAlt } from "react-icons/fa";
import { Button } from 'antd';
 export type  NavbarWidthSearchType={
    id:string,
    title:string,
    url:string,
    hasNested?:boolean,
    nestedMenu?:NavbarWidthSearchType[],

}
export type menuSiteLogo={
    logSrc:string,
    siteName:string,
    homeUrl:string
}
function HeaderBasic() {
    const menuList:NavbarWidthSearchType[]=[
        {
            id:'s-1',
            title:'درباره ما',
            url:'/',
        
        },
        {
            id:'s-2',
            title:'تماس با ما',
            url:'/',
        
        },
        {
            id:'s-3',
            title:'خدمات',
            url:'/',
             hasNested:true,
             nestedMenu:[
                {
                    id:'ss-1',
                    title:'خدمات-1',
                    url:'/',
                
                },
                {
                    id:'ss-2',
                    title:'خدمات-2',
                    url:'/',
                
                },
             ]
        },
        {
            id:'s-4',
            title:'خانه',
            url:'/',
        
        },

    ]
    const headerLogo:menuSiteLogo={
        homeUrl:'/',
        siteName:'فرانت کامپوننت',
        logSrc:'https://flowbite.com/docs/images/logo.svg'
    }  
    const [headerSearch, setHeaderSearch] = useState("")
  return (
    <div className='w-full'>
        <NavbarWidthSearch menuList={menuList} headerLogo={headerLogo} setHeaderSearch={setHeaderSearch} boxShadow={true} fullWidth={true} leftBox={<Button className='border-0 shadow-none'><FaSignOutAlt size={24} color='rgb(29 78 216 )' /></Button>}/>
    </div>
  )
}

export default HeaderBasic