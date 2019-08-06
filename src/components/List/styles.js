import styled from 'styled-components';

export const Container = styled.div `
   height:100%;
   padding: 0 15px;
   flex: 0 0 300px;
   
   & + div{
        border-left: 0.5px solid rgba(1,0,0,0.3);
    }  

   header{
       display: flex;
       justify-content: space-between;
       align-items: center;
       height: 42px;

       h4{
           font-weigth: 500;
           font-size:16px;
           padding: 0 10px;
       }

       button{
            width:  30px;
            height: 30px;
            border: 0;
            border-radius: 18px;
            background: #4CAF50;
            cursor:pointer;
            align-items: center;
       }
   }

   ul{
       margin-top:20px;
   }
`;