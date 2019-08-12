import styled,{ css } from 'styled-components';

export const ContainerSideBar = styled.div`  
    z-index: 2;   
    transition: width 0.1s ease-out 0s;
    will-change: transform;
    overflow-y: auto;
    right: 0px;
    width: 0px;
    background: #ffffff;
    box-shadow: 0 0 10px rgba(107,107,107,0.6);

    ${
        props => props.isOpen && css`
            padding: 10px;
            width: 450px;
        `
    }
`