import React from 'react';

function MedicinesCard({ title = '', expiry = '', price = '', description = '' }) {
    return (
        <>
            <ProductDetail>
                <Heading4>{title}</Heading4>
                <SpanCategory>{expiry}</SpanCategory>
                <Descri>{description}</Descri>
                <Heading5>{price}</Heading5>
            </ProductDetail>
        </>
    );
}

export default MedicinesCard;