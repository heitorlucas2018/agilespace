import styled,{css} from 'styled-components';

export const Container = styled.div`

  background: #fff;
  border: 0.5px solid #d6d6d6;
  border-radius: 5px;
  margin: 10px 0 0 0;
  padding: 10px;
  box-shadow: 0 1px 4px 0 rgba(150, 153, 156, 0.8);
  cursor:grab;

  header{
      display:flex;
      flex-flow:row;
      align-items: center;
  }
  header span{
    font-size: 15;
    font-weight: bolder;
    flex:auto;
  }
  p{
      font-weigth:500;
      line-heigth:20px;
  }
  footer{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 42px;
  }
  
  button{
        width:  30px;
        height: 30px;
        border: 0;
        border-radius: 18px;
        background: #cddc3905;
        cursor:pointer;
        align-items: center;
       }
  ${
    props => props.isDragging && css`
      border: 2px dashed rgba(0,0,0,0.2);
      padding-top: 30px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: move;
      p, div, header, footer{
        opacity: 0;
      }
    `
  }
  
  ${
    props => props.isDrop && css`
      border: 2px dashed rgba(0,0,0,0.2);
      padding-top: 30px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: 'move';

      p, div, header, footer{
        opacity: 0;
      }
    `
  }

  }
`;

export const Label = styled.div`
  margin: 0 5px;
  width: 25px;
  height: 5px;
  border-radius:2px;
  display:inline-block;
  background: #f44336;
`;

export const SubTitle = styled.div`
    line-height: 15px;
    font-weight: 200;
    font-size: 12px;
`;
