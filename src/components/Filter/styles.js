import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 30px;
    background: #4d8bbd;
    padding: 0 20px;
    color: #fff;
    display: inline-table;
    flex-flow: row;
    align-items: center;

    .btn-flat{
            height: 100%;
            border: 0;
            border-radius: 18px;
            background: #4d8bbd !important;
            color: #fff;
            cursor:pointer;
            align-items: initial;
            font-size: small;
       }
    .btn:hover{
        background: #3d739e !important;
    }
    .btn:focus{
        background: #3d739e !important;
        box-shadow: 0 0 10px rgba(48, 100, 142,0.6);
    }

    #filter-collapse-menu{
        border-top: 1px solid #fff;
    }

`;