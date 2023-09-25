import React from 'react';
import { BaseCardBox, Descri, Heading4, Heading5, ProductDetail, ProductImg, SpanCategory } from './CardBox.style';

function CardBox({ img='', category='', title='', description='', price='' }) {
    return (
        <>
            <BaseCardBox>
                <ProductImg>{img}</ProductImg>
                <ProductDetail>
                    <SpanCategory>{category}</SpanCategory>
                    <Heading4>{title}</Heading4>
                    <Descri>{description}</Descri>
                    <Heading5>{price}</Heading5>
                </ProductDetail>
            </BaseCardBox>
        </>
    );
}

export default CardBox;