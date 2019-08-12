import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 30px;
    background: #2381ce;
    padding: 0 20px;
    color: #fff;
    display: inline-table;
    flex-flow: row;
    align-items: center;

    button{
            height: 100%;
            border: 0;
            border-radius: 18px;
            background: transparent !important;
            color: #c5c6c7;
            cursor:pointer;
            align-items: initial;
            font-size: small;
            float: right;
       }
    button:hover{
        color: #ffffff !important;
    }
    button:focus{
        color: #ffffff !important;
        box-shadow: 0 0 10px rgba(48, 100, 142,0.6);
    }

    #filter-collapse-menu{
        border-top: 1px solid #fff;
    }

`;