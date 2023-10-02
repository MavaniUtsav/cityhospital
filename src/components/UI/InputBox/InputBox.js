import React from 'react';
import { BaseInput, ErrorBox } from './InputBox.style';

function InputBox({ errorText ,...rest}) {
    return (
        <>
            <BaseInput {...rest}/>
            <ErrorBox>
                {errorText}
            </ErrorBox>
        </>
    );
}

export default InputBox;