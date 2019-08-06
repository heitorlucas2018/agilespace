import React from 'react';
import { useDrag } from 'react-dnd';
import { Container,Label,SubTitle } from './styles';
import { MdComment } from 'react-icons/md';

export default function Card({data}) {

  const [{isDragging}, dragRef] = useDrag({
    item:{ type: 'CARD' },
    collect: monitor=>({
      isDragging: monitor.isDragging()
    })
  });
  
  return (
    <Container ref={dragRef} isDragging={isDragging}>
        <header>
          <Label color={data.colo} />
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
