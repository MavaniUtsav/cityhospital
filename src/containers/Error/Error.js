import React from 'react';
import BackBtn from '../../components/UI/BackBtn/BackBtn';

function Error(props) {
    return (
        <>
            <div className="container">
                <br></br>
                <BackBtn />
                <div id='errorpage'>
                    <img src='https://supplier-prod-temp-files.s3.ap-southeast-1.amazonaws.com/products-upload/cataloging/1696319012246/error.png' />
                </div>
            </div>
        </>
    );
}

export default Error;