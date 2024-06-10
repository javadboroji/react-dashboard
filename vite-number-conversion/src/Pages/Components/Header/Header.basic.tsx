import React, { useState } from 'react'
import NavbarWidthSearch from './NavbarWidthSearch'
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
        <NavbarWidthSearch menuList={menuList} headerLogo={headerLogo} setHeaderSearch={setHeaderSearch}/>
    </div>
  )
}

export default HeaderBasic