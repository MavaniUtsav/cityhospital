import styled from "styled-components";

export const Heading1 = styled.div`
    font-family: "Raleway", sans-serif;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    color: #2c4964;

    &:before{
        content: '';
        position: absolute;
        display: block;
        width: 120px;
        height: 1px;
        background: #ddd;
        bottom: 1px;
        left: calc(50% - 60px);
    }

    &:after{
        content: '';
        position: absolute;
        display: block;
        width: 40px;
        height: 3px;
        background: #FF6337;
        bottom: 0;
        left: calc(50% - 20px);
    }
`
export const SubHeading = styled.div`
    font-size: 26px;
    font-weight: 600;
    margin-bottom: 20px;
    color: #2c4964;
    font-family: "Raleway", sans-serif;
`
export const SubHeading2 = styled(SubHeading)`
    font-size: 28px;
    font-weight: 700;
    color: #2c4964;
    margin-bottom: 15px;
`

export const Heading3 = styled.div`
    font-family: "Raleway", sans-serif;
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 20px;
    color: #2c4964;
`