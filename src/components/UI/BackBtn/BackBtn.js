import React from 'react';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

function BackBtn(props) {
    const navigate = useNavigate()

    // 2 Type to add goBack functionality
    // const handleBack = () => {
    //     window.history.back();
    // }

    return (
        <>
            <Button btnType='primary' onClick={() => navigate(-1)}>Back</Button>
        </>
    );
}

export default BackBtn;