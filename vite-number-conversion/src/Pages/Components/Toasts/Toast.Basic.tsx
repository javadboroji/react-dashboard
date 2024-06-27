import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import BtnBasComponent from '../Buttons/BtnBasComponent'
import "react-toastify/dist/ReactToastify.css";

type ToastType = {
  type: string,
  TextToast: string,
  display:()=>void
}
const ToastBasic: React.FC<ToastType> = ({ type, TextToast,display }) => {
   display = () => {
    switch (type) {
      case "success":
        toast.success(TextToast, {
          position: "bottom-right"
        });
        break;
      case "error":
        toast.error(TextToast, {
          position: "bottom-right"
        });
        break;
      case "warning":
        toast.warn(TextToast, {
          position: "bottom-right"
        });
        break;
      case "info":
        toast.info(TextToast, {
          position: "bottom-right"
        });
        break;
      default:
        break;
    }
  }
  useEffect(() => {
 
  }, [type])

  return (

    <div className='p-8'>
      <ToastContainer rtl />
    </div>
  )
}

export default ToastBasic