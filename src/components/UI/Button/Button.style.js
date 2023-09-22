import styled from "styled-components";

export const BaseButton = styled.button`
    border: 0;
    padding: 10px 35px;
    transition: 0.4s;
    border-radius: 50px
`

export const PrimaryButton = styled(BaseButton)`
    background: #FF6337;
    color: #fff;
`

export const SecondryButton = styled(BaseButton)`
    background: #000000;
    color:#fff;
`
export const OutlineButton = styled(BaseButton)`
    background: none;
    color: #000;
    border: 2px solid black;
`