import React,{ useState } from 'react';
import produce from 'immer';
import {connect} from 'react-redux';
import { inData } from '../../services/action';
import List  from '../List';
import { Container } from './styles';
import boardContext from './Context';
import Sidebar from '../Bars/Sidebar';

const data =[];

function Board() {
  const [lists,setlists] = useState(data);
  console.log('data api',data,lists.length);

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
                return (e.card_title.toLowerCase().indexOf(value.toLowerCase()) > -1);
            })
               e.cards.push(rs)
                 console.log(rs); 
              return (rs.length> 0);
          })
          console.log(draft.length)
      }));
    }
    if(lists.length <= 0){
      return (
        <boardContext.Provider value={{ lists, move, movelist, addcard, formFilter }}>
          <Container>

          </Container>
           <Sidebar/>
        </boardContext.Provider>
      );
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


const mapStateToProps = (state) => {
  console.log('mapStateToProps filter => ',state)
      return{
          msg: state.isOpen
      }

}
const mapDispatchToProps = (dispatch) => {
      return {
          onClickAction : (type,data) => dispatch(inData(type,data))
      }
  }


export default connect(mapStateToProps, mapDispatchToProps)(Board);
