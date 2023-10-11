import React from 'react';
import { Descri, Heading4, Heading5, ProductDetail, SpanCategory } from './CardBox.style';
import Button from '../Button/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


function MedicinesCard({ title = '', expiry = '', price = '', description = '', isButton = '', isWish = '', onHandleCart, onHandleWish }) {
    return (
        <>
            <ProductDetail id='medicinecard'>
                <Heading4>{title}</Heading4>
                <SpanCategory>{expiry}</SpanCategory>
                <Descri>{description}</Descri>
                <Heading5>{price}</Heading5>
                <div id='cardbadges'>
                    {
                        isButton !== '' ? <Button onClick={onHandleCart} id='addcart'>{isButton}</Button> : null
                    }
                    {
                        isWish === true ? <FavoriteIcon onClick={onHandleWish} id='fav'></FavoriteIcon> : <FavoriteBorderIcon onClick={onHandleWish} id='wishlist'></FavoriteBorderIcon>
                    }
                </div>
            </ProductDetail>
        </>
    );
}

export default MedicinesCard;