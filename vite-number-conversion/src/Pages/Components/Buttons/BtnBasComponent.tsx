import React, { useEffect, useState } from 'react'
import { CSSProperties } from 'react';
import { CiBookmarkRemove } from "react-icons/ci";
import './buttons.style.css'

/*================== Type =================*/


type basButtons = {
    basButtonsType: string,
    outline?: boolean,
    btnText: string,
    btnEvent?: () => any,
    dyStyle?:string,
    icon?: any,
    size?: string,
    btnTypeSubmit?:boolean
}

 const BtnBasComponent = (props: basButtons) => {
     
     const [buttonReturn, setButtonReturn] = useState<JSX.Element | null>(null);

    const buttonBind = (bgColor: string, color?: string) => {
        setButtonReturn(<button type={`${props.btnTypeSubmit?'submit' :'button'}`} onClick={props.btnEvent}
         className={` ${color?color:''} ${props.dyStyle?props.dyStyle:''} border-2 flex justify-center items-center mx-2 ${props.size==='sm'?'bas-btn-sm':props.size==='md'?'bas-btn-md':'bas-btn-lg'} ${props.outline ? ` border-${bgColor}` : `bg-${bgColor}  `}`}>
             {props.icon}{props.btnText}
             </button>)

    }
    useEffect(() => {
        switch (props.basButtonsType) {
            case 'primary':
                buttonBind('primary')
                break;
            case 'secondary':
                buttonBind('black', 'text-white ')
                break;
            case 'success':

                buttonBind('green-600')
                break;
            case 'danger':
                buttonBind('red-800')

                break;
            case 'warning':
                buttonBind('orange-500')
                break;
            case 'info':
                buttonBind('blue-50')

                break;
            case 'light':
                buttonBind('gray-300')

                break;
            case 'dark':
                buttonBind('bg-dark')
                break;
            default:
                break;
        }
    }, [props])



    return <> {buttonReturn}</>
}
export default BtnBasComponent