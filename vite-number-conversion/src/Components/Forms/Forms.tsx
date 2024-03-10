import React from 'react'
import FormText from './FormText';
import FormSelect from './FormSelect';
import FormDate from './FormDate';

type formsPropsType = {
    fieldType: string,
    placeholder:string,
    defaultValue?:string
}
function Forms(props: formsPropsType) {
    const { fieldType } = props;

    // switch (fieldType) {
    //     case "text":
    //         <FormText />
    //         break;
    //     case "select":
    //         <FormSelect />
    //         break;
    //     case "date":
    //         <FormDate />
    //         break;
    //     default:
    //         break;
    // }
   return<></>
}

export default Forms