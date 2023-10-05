import React from 'react';
import { Descri, Heading4, Heading5, ProductDetail, SpanCategory } from './CardBox.style';

function MedicinesCard({ title = '', expiry = '', price = '', description = '' }) {
    return (
        <>
            <ProductDetail id='medicinecard'>
                <Heading4>{title}</Heading4>
                <SpanCategory>{expiry}</SpanCategory>
                <Descri>{description}</Descri>
                <Heading5>{price}</Heading5>
            </ProductDetail>
        </>
    );
}

export default MedicinesCard;