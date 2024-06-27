import React from 'react';
import PropTypes from 'prop-types';

type ButtonsTypes = {
    text: string,
    color?: string,
    rounded?: string,
    backgeround?: string,
    padding?: string,
    fontSize?: string,
    backgroundColor?: string,
    eventHandler?:()=>any 
};

function Buttons(props: ButtonsTypes) {
    return (
        <button
         style={{ backgroundColor: props.backgroundColor, fontSize: props.fontSize, borderRadius: props.rounded, color: props.color, border: '0', padding: props.padding }}
         onClick={props.eventHandler}
         > {props.text}</button>
    );
}

export default Buttons;