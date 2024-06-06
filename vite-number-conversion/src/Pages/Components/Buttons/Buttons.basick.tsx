import React, { useEffect, useState } from 'react'
import { CSSProperties } from 'react';
import { CiBookmarkRemove } from "react-icons/ci";
import './buttons.style.css'
function ButtonsBas() {

    return (
        <div className='flex flex-col p-4'>
            <p className='p-2'> دکمه ها</p>
            <span><span className='text-lg text-orang-100 p-2'> ComponentName:</span> BasButtons</span>
            <ul>
                <span className='text-lg text-orang-100 p-2'>PropsList </span>
                <li className='p-2 my-2 bg-gray-100'>basButtonsType:  'Primary' ,'secondary','Success','Danger','Warning','Info','Light','Dark</li>
                <li className='p-2  my-2 bg-gray-100'>btnText  :text Button </li>
                <li className='p-2  my-2 bg-gray-100'>btnEvent :buttonOnclickHandler </li>
                <li className='p-2  my-2 bg-gray-100'>icon:if Button has Icon </li>
                <li className='p-2  my-2 bg-gray-100'>size :'sm','md','lg </li>
                <li className='p-2  my-2 bg-gray-100'>dyStyle : customise Style</li>
                <li className='p-2  my-2 bg-gray-100'>outline : outline button </li>
                <li className='p-2  my-2 bg-gray-100'>btnTypeSubmit :  button type has submit </li>
            </ul>
            <div className='p-4 rounded-lg bg-border-gray w-full flex  justify-between h-fit'>
                <button type="button" className="bg-primary mx-2">Primary</button>
                <button type="button" className="bg-black text-white mx-2">Secondary</button>
                <button type="button" className="bg-green-600 mx-2">Success</button>
                <button type="button" className="bg-red-800 text-white mx-2">Danger</button>
                <button type="button" className="bg-orange-500 mx-2">Warning</button>
                <button type="button" className="bg-blue-50 mx-2">Info</button>
                <button type="button" className="bg-gray-300 mx-2">Light</button>
                <button type="button" className="bg-dark mx-2">Dark</button>
            </div>
      
        </div>
    )
}

export default ButtonsBas;

/*================================ reUse Button Components ==============================*/
