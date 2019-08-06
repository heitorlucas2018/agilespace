import styled,{css} from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #fff;
  border-radius: 5px;
  margin: 10px 0 0 0;
  padding: 15px;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);
  cursor:grab;

  header{
      position: absolute;
      top: -22px;
      left:15px;
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
      padding-top: 100px;
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
