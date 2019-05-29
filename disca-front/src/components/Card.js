import styled from 'styled-components';


export const DSCard = styled.div`
    border: solid 1px #e8e8e8;
    padding: 15px;
    background: #fff;
    border-radius: 10px;
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
	transition: all .3s;
    margin-bottom: 2rem;


    &:hover {
        filter: drop-shadow(1px 2px 3px rgba(0, 0, 0, 0.336));
    }
`;


export const DSCardTitle = styled.h1`
    font-weight: bold;
    font-size: 2.5rem;
`;
