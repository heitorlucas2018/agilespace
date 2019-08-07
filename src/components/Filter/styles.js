import styled,{css} from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 30px;
    background: #4d8bbd;
    padding: 0 20px;
    color: #fff;
    display: inline-table;
    flex-flow: row;
    align-items: center;
    
    button{
            height: 100%;
            border: 0;
            border-radius: 18px;
            background: #015aa000;
            color: #fff;
            cursor:pointer;
            align-items: initial;
            font-size: small;
       }

    ${
        props => props.isOpen && css`
            height:40px;
            background: #4d8bbd;
            transition: width 600ms ease-out, height 600ms ease-out;
        `
    }

`;
export const Collapse = styled.div`
    width: 100%;
    height: 30px;
    background: #4d8bbd;
    padding: 0 20px;
    color: #fff;
    display: flex;
    align-items: center;    
`