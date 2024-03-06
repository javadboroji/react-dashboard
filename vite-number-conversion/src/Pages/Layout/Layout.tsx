import React from 'react';
import PropTypes from 'prop-types';
import SideBar from "../../Components/SideBar/SideBar.js";
import HeaderLayout from "../../Components/Header/HeaderLayout.tsx";

type Props = {
    children: JSX.Element[] | JSX.Element  }

function Layout({childern}:Props) {
    return (
        <>
        <div className={'flex flex-col w-[100%] items-start'}>
            <HeaderLayout/>
            <SideBar/>

        </div>
            {childern}
        </>
    );
}

export default Layout;