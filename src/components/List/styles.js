import styled from 'styled-components';

export const Container = styled.div `
   padding: 1px 15px;
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
       h5{
            border: 1px solid #c2c6cc;
            box-shadow: 2px 2px 6px 0px rgba(1,0,0,0.3);
            background: #ecf1f8;
            color: #000;
            padding: 5px;
            border-radius: 20px;
            align-items: center;
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
       button:hover{           
        background: #479a4a;
       }
   }

   ul{
       margin-top:20px;
       height: 88%;
       overflow-y: auto;
       padding: 0 5px;
   }
`;