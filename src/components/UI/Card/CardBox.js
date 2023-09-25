import React from 'react';
import { BaseCardBox, Descri, Heading4, Heading5, ProductDetail, ProductImg, SpanCategory } from './CardBox.style';

function CardBox({ children, data, ...rest }) {
    return (
        <>
            {
                data.map((v, i) => {
                    return (
                        <BaseCardBox {...rest}>
                            <ProductImg>{v.url}</ProductImg>
                            <ProductDetail>
                                <SpanCategory>{v.category}</SpanCategory>
                                <Heading4>{v.name}</Heading4>
                                <Descri>{v.description}</Descri>
                                <Heading5>{v.price}</Heading5>
                            </ProductDetail>
                        </BaseCardBox>
                    )
                })
            }

        </>
    );
}

export default CardBox;