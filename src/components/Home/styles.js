import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction: row;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    height: 100%;

`;
export const Navbar = styled.nav`
    height: 100%;
    width: 50px;
    background: #ffffff;
    padding: 5px;
    box-shadow: 0 0 10px rgba(107,107,107,0.6);

    ul li{
        align-items: center;
        color: #9e9e9e;
        padding: 5px;
    }
    ul li:hover{
        align-items: center;
        color: #4d8bbd;
        cursor: pointer;
    }
`

export const Main = styled.main`
    display:flex;
    flex-direction: column;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    height: 100%;
`
export const Content = styled.div`
    display:flex;
    scroll-margin: initial;
    width: 100%;
    height: calc(100% - 72px);
`
