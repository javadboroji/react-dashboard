import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import BtnBasComponent from '../Buttons/BtnBasComponent'
import "react-toastify/dist/ReactToastify.css";

function ToastBasic() {
    const notify = () => {

        toast.success("با موفقیت انجام شد!", {
            position: "bottom-right"
        });
        toast.error("خطای سرور !", {
            position: "bottom-right"
          });
          toast.warn(" هشدار!", {
            position: "bottom-right"
          });
          toast.info("اطلاعات بیشتر", {
            position: "bottom-right"
          });
    }

    return (

        <div className='p-8'>
            <BtnBasComponent btnEvent={notify} basButtonsType='light' btnText='نمایش' dyStyle=' rounded-lg text-black px-9 my-4  transition ease-in-out delay-150 hover:bg-orang-100' size='md' />

            <ToastContainer rtl />
        </div>
    )
}

export default ToastBasic