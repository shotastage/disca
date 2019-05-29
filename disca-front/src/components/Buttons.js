import React from 'react';
import styled from 'styled-components';
import icon from '../assets/plus-icon.svg';

const circleButtonSize = "63px";

const Button = styled.a`
    background: #fff;
    color: #333;
    width: ${circleButtonSize} !important;
    height: ${circleButtonSize} !important;
    line-height: ${circleButtonSize};
    text-align: center;
    border-radius: 33px;
    vertical-align: middle;
    filter: drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.336));
    transition: .4s;
    margin-bottom: 20px;

    &:hover {
        filter: none;
    }
`;


const IconImage = styled.img`
    margin: 23px;
    padding: 0;
    width: 40px;
    height: 40px;
`;


export function CircleButton() {
    return (
        <Button><IconImage src={icon}/></Button>
    );
}
