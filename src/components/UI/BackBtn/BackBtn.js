import React from 'react';
import Button from '../Button/Button';

function BackBtn(props) {
    const handleBack = () => {
        window.history.back();
    }

    return (
        <>
            <Button btnType='primary' onClick={() => handleBack()}>Back</Button>
        </>
    );
}

export default BackBtn;