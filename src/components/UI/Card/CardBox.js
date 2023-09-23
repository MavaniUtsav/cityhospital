import React from 'react';
import { BaseCardBox, ProductDetail, ProductImg } from './CardBox.style';

function CardBox( {children, ...rest} ) {
    return (
        <>
            <BaseCardBox>
                {children}
            </BaseCardBox>
        </>
    );
}

export default CardBox;