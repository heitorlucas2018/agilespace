import React,{ useState } from 'react';
import produce from 'immer';
import { loadList } from '../../services/api';
import List  from '../List';
import { Container } from './styles';
import boardContext from './Context';
import Sidebar from '../Bars/Sidebar';

const data = loadList();

export default function Board() {
  const [lists,setlists] = useState(data);

    function move(fromlist,from,tolist,to) {
      setlists(produce(lists, draft=>{
        const dragged = draft[fromlist].cards[from];
        draft[fromlist].cards.splice(from,1);
        draft[tolist].cards.splice(to,0,dragged);
        }))
    };
    function movelist(fromlist,from,tolist,to) {
      setlists(produce(lists, draft=>{
        const dragged = draft[fromlist].cards[from];
        draft[fromlist].cards.splice(from,1);
        draft[tolist].cards.splice(to,0,dragged);
      }));
    }
    function addcard(fromlist,from,data) {
      setlists(produce(lists,draft=>{
        data.card_id = 'dgahj0';
        const dragged = data;
        draft[fromlist].cards.push(dragged)
      }));
    }
    function formFilter(value) {
      setlists(produce(lists,draft=>{
         draft.filter((e)=>{
          e.cards.splice({})
              const rs = e.cards.filter((e)=>{
               // console.log(e.card_title,(e.card_title.toLowerCase().indexOf(value.toLowerCase()) > -1))
                return (e.card_title.toLowerCase().indexOf(value.toLowerCase()) > -1);
            })
               e.cards.push(rs)
                 console.log(rs); 
              return (rs.length> 0);
          })
          console.log(draft.length)
      }));
    }
    
  return (
    <boardContext.Provider value={{ lists, move, movelist, addcard, formFilter }}>
        <Container>
          { lists.map((list,index) => <List key={list.list_title} index={index} data={list} />)}
        </Container>
       <Sidebar/>
    </boardContext.Provider>
  );
}
