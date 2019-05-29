import React from 'react';
import styled from 'styled-components';
import icon from '../assets/plus-icon.svg';


const circleButtonSize = "60px";


const Button = styled.a`
    display: inline-block;
    background: #fff;
    color: #333;
    width: ${circleButtonSize} !important;
    height: ${circleButtonSize} !important;
    line-height: ${circleButtonSize};
    text-align: center;
    border-radius: 50%;
    vertical-align: middle;
    filter: drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.336));
    transition: .4s;
    margin-bottom: 20px;
    margin-left: 40px;

    &:hover {
        filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.336));
    }
`;


const IconImage = styled.object`
    margin: 15px;
    width: 30px;
    height: 30px;
`;


export function CircleButton() {
    return (
        <Button>
            <IconImage type="image/svg+xml" data={icon}>
            </IconImage>
            <IconImage/>
        </Button>
    );
}
