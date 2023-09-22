import React from 'react';
import { BaseInput } from './InputBox.style';

function InputBox({...rest}) {
    return (
        <>
            <BaseInput {...rest}/>
        </>
    );
}

export default InputBox;