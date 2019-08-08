import styled from 'styled-components';

export const Container = styled.div`
    
    display: flex;
    padding: 10px 0;
    scroll-margin: initial;
    overflow-y: hidden;
    width: 100%;
    /*
 *  STYLE 1
 */

        ::-webkit-scrollbar-track
        {
            border-radius: 3px;
            -webkit-box-shadow: inset 0 0 6px rgba(77,139,189,0.51);
            background-color: #fff;
        }

        ::-webkit-scrollbar
        {
            width: 12px;
            background-color: #F5F5F5;
        }

        ::-webkit-scrollbar-thumb
        {
            border-radius: 3px;
            -webkit-box-shadow: inset 0 0 6px rgba(77,139,189,0.51);
            background-color: #4d8bbd;
        }
`;
