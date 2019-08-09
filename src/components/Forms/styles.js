import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    input{
        width: 100%;
        border: 0.1rem solid #fff;
        border-radius: 10px;
        padding: 2px 6px;
    }
    div{
        padding-bottom: 10px;
        border-bottom: 1px solid #c5d4e0;
        display:flex;
        flex-flow: column;
    }
    span{
        display:flex;
        align-items: center;
    }
    span input{
        width:10%;
        float: right;
    }
`;

