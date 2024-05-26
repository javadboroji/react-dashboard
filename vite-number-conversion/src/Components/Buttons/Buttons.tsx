import React from 'react';
import PropTypes from 'prop-types';

type ButtonsTypes = {
    text: string,
    color?: string,
    rounded?: number,
    backgeround?: string,
    padding?: string,
    fontSize?: string,
    backgroundColor?: string
};

function Buttons(props: ButtonsTypes) {
    return (
        <button style={{ backgroundColor: props.backgroundColor, fontSize: props.fontSize, borderRadius: props.rounded, color: props.color, border: '0', padding: props.padding }}> {props.text}</button>
    );
}

export default Buttons;