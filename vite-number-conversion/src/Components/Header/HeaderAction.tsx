import React from 'react';
import PropTypes from 'prop-types';
import { IoIosSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { MdEmail } from "react-icons/md";
HeaderAction.propTypes = {

};

function HeaderAction(props) {
    return (
        <div className={'flex  justify-between w-[95%]'} >
         <div className={'flex items-center'}>
             <button className={'bg-Navy-blue border-0 focus:outline-0'}>   <IoIosSettings color={'#fff'} fontSize={24}/></button>
             <button className={'bg-Navy-blue border-0 focus:outline-0'}>   <IoIosNotifications color={'#fff'} fontSize={24}/></button>
             <button className={'bg-Navy-blue border-0 focus:outline-0'}>  <MdEmail color={'#fff'} fontSize={24}/></button>
         </div>
            <div className={'flex w-40'}>
                <img className={'w-12 h-12 rounded-full'} src={'https://w3crm.dexignzone.com/xhtml/images/tab/1.jpg'} />
                <div className={'flex flex-col '}>
                    <p className={'text-wihte text-balance'}> میناز اسکندری</p>
                    <span className={'text-wihte text-base'}> info@email.com</span>
                </div>
            </div>
        </div>
    );
}

export default HeaderAction;