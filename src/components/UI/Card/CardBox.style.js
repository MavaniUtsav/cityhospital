import styled from "styled-components";

export const BaseCardBox = styled.div`
    // border: 1px solid black;
    width: 380px;
    position: relative;
    box-shadow: 0 2px 7px #dfdfdf;
    margin-top: 30px;
    margin-right: 50px;
    background: #fafafa;
    // float: right;

    &:hover {
        transform: scale(1.06,1.06);
        transition: all 0.7s;
    }
`

export const ProductImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    padding: 50px;
    background: #f0f0f0;
`
export const ProductDetail = styled.div`
    padding: 30px;
    font-family: "Raleway", sans-serif;
    // font-family: Fantasy;
`
export const SpanCategory = styled.span`
    display: block;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: #ccc;
    margin-bottom: 18px;
`

export const Heading4 = styled.a`
    font-weight: 500;
    display: block;
    margin-bottom: 18px;
    text-transform: uppercase;
    color: #363636;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
        color: #fbb72c;
        cursor: pointer;
    }
`
export const Descri = styled.p`
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 18px;
    color: #999;
`
export const Heading5 = styled.div`
    width: 50%;
`

