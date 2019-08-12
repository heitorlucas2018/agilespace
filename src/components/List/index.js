import React,{useContext} from 'react';
import boardContext from '../Board/Context';
import { Container } from './styles';
import { useDrop } from 'react-dnd';
import { MdAdd } from 'react-icons/md';
import Card from '../Card';

export default function List({ data, index: listindex }) {
   const cards = data.cards;
   const { movelist,addcard } = useContext(boardContext);
   const [,dropListRef] = useDrop({
            accept: 'CARD',
            hover(item,monitor){

                console.log('mov')
             if(cards.length !== 0){
                    return;
                }
            movelist(item.listIndex,item.index,listindex,0);
            item.index = 0;
            item.listIndex = listindex;
            
            }
      });
      function botao(data) {
             addcard(listindex,0,[]);
      }
  return (
      <Container>
          <header>
              <h5>{cards.length}</h5>
              <h4>{data.list_title}</h4>
              <button type="button" onClick={botao}>
                  <MdAdd  size={24} color="#fff"/>
              </button>
          </header>
          <ul ref={dropListRef} >
            {cards.map((card,index) =>  <Card key={card.card_id} listIndex={listindex} index={index} data={card} />)}
          </ul>
      </Container>
  );
}
