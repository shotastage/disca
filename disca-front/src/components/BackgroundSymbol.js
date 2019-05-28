import React from 'react';
import styled from 'styled-components';
import bg from '../assets/bg.svg';

const BgImage = styled.img`
    z-index: -1;
    position: absolute;
    height: 60%;
    left: 0;
    bottom: 0;
`;

function BgSymbol() {
    return (
        <BgImage src={bg}/>
    );
}


export default BgSymbol;
