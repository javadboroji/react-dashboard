import React from 'react';
import PropTypes from 'prop-types';
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
HeaderAction.propTypes = {

};

function HeaderAction(props) {
    return (
        <div className={'flex w-1/12 justify-between'} >
         <button className={'bg-Navy-blue border-0 focus:outline-0'}>   <IoIosSettings color={'#fff'} fontSize={24}/></button>
            <button className={'bg-Navy-blue border-0 focus:outline-0'}>   <IoIosNotifications color={'#fff'} fontSize={24}/></button>
                <button className={'bg-Navy-blue border-0 focus:outline-0'}>  <MdEmail color={'#fff'} fontSize={24}/></button>
        </div>
    );
}

export default HeaderAction;