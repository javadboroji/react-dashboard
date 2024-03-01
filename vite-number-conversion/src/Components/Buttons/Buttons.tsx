import React from 'react';
import PropTypes from 'prop-types';

type  ButtonsTypes = {
    text:string,
   type:string,
    color:string,
    rounded:number,
    backgeround:string,
    padding:string,
    fontSize:string
};

function Buttons<ButtonsTypes>(props) {
    return (
        <button style={{backgroundColor:props.backgroundColor,fontSize:props.fontSize ,borderRadius:props.rounded,color:props.color,type:props.type,border:'0' ,padding:props.padding}}> {props.text}</button>
    );
}

export default Buttons;