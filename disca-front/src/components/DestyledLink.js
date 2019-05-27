import { Link } from 'react-router-dom';
import styled from 'styled-components';


const DestyledLink = styled(Link)`
    text-decoration: none;
    color: #333;

    &:hover {
        color: #333;
        text-decoration: none;
    }
`;


export default DestyledLink;
