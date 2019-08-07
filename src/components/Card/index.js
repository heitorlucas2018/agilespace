import React, {useRef, useContext} from 'react';
import { useDrag,useDrop } from 'react-dnd';
import { Container,Label,SubTitle } from './styles';
import { MdComment } from 'react-icons/md';
import boardContext from '../Board/Context';

export default function Card({data,index,listIndex}) {
  const ref = useRef();
  const { move } = useContext(boardContext);

  const [{isDragging}, dragRef] = useDrag({
    item:{ type: 'CARD',index,listIndex },
    collect: monitor=>({
      isDragging: monitor.isDragging()
    })
  });
  const [{isDrop},dropRef] = useDrop({
    accept: 'CARD',
    collect: monitor=>({
      isDrop: monitor.canDrop(),
    }),
    hover(item,monitor){
      const dragListIndex = item.listIndex;
      const dropListIndex = listIndex;
      const dragindex = item.index;
      const dropindex = index;
      if(dragindex === dropindex && dragListIndex === dropListIndex ){
        return;
      }
      
      const targetsize    = ref.current.getBoundingClientRect();
      const targetcenter  = (targetsize.bottom-targetsize.top)/2; 

      const draggedofset = monitor.getClientOffset();
      const draggedtop   = (draggedofset.y-targetsize.top);
      if(dragindex < dropindex && draggedtop < targetcenter && dragListIndex === dropListIndex){
        return;
      }
      if(dragindex > dropindex && draggedtop > targetcenter && dragListIndex === dropListIndex){
        return;
      }

        move(dragListIndex,dragindex,dropListIndex,dropindex);
        item.index = dropindex;
        item.listIndex = dropListIndex;
    }
  });
  dragRef(dropRef(ref));
  return (
    <Container ref={ref} isDragging={isDragging} isdrop={isDrop}>
        <header>
          <Label color={data.color} />
            <h5>{data.card_id}-{data.card_title}</h5>
        </header>
        <SubTitle>Status : {data.status} </SubTitle>
          <p>{data.card_data}</p>
        <footer>
          <h6>
            <p>Valor : {data.score} </p>
            <p>{data.member} </p>
          </h6>
          <button type="button">
              <MdComment size={24}/>
            </button>
        </footer>
    </Container>
  );
}
