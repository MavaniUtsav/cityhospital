import React from 'react';
import { BaseButton, OutlineButton, PrimaryButton, SecondryButton } from './Button.style';

function Button({children, btnType='primary', btndisabled=false , ...rest}) {
    const checkBtnType = () => {
        switch (btnType) {
            case 'primary':
                return PrimaryButton
    
            case 'secondry':
                return SecondryButton
    
            case 'outline':
                return OutlineButton
        }
    }
    
    const CustomBtn = checkBtnType();

    return (
        <>
            <CustomBtn disabled={btndisabled} {...rest}>
                {children}
            </CustomBtn>
        </>
    );
}

export default Button;