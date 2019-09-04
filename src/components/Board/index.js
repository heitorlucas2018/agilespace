import React,{ useState, Component } from 'react';
import Axious from 'axios';
import List  from '../List';
import { Container } from './styles';
import boardContext from './Context';
import Sidebar from '../Bars/Sidebar';
import {loadList, move, movelist, addcard, formFilter } from './actions';
import {connect} from 'react-redux';
import { inData } from '../../services/action';

const lists = [];
class Board extends Component {
  constructor(props){
      super(props);
      this.state = {
        lists: []
      }
      this.list = [];
  }
  componentDidMount(){
      const api = Axious.get("http://localhost:3000/api/")
      .then(response => {
        this.props.loadlist('ADD_DATA',response.data);
          this.testeList(response.data)
      })
      .then(status => {
        console.log("2", status);
        return status;
      })
      .catch(msg => {
        console.error("Error", msg);
      });
  }

  testeList(data){
    console.log('testeList',data)
    
  }

  render() {
    const lists = this.props.lists.payload;
      console.log('teste',this.props,this.props.lists,lists)
    if(!this.props.lists.payload){
      return (
        <boardContext.Provider value={{ move, movelist, addcard, formFilter }}>
            <Container>
            </Container>
           <Sidebar/>
        </boardContext.Provider>
      );
    }else{
      return (
        <boardContext.Provider value={{ move, movelist, addcard, formFilter }}>
            <Container>
              { lists.map((list,index) => <List key={list.list_title} index={index} data={list} />)}
            </Container>
           <Sidebar/>
        </boardContext.Provider>
    );
    }
  }
  
}

const mapDispatchToProps = (dispatch) => {
  console.log('load dispatch  board')
  return {
      loadlist : (type,data) => dispatch(inData(type,data))
  }
}

const mapStateToProps = (state) => {
    console.log('Board',state.Board);
  return{
      lists: state.Board
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(Board);



/**
 * 
function connectAPI(data) {
  const api = Axious.get("http://localhost:3000/api/")
    .then(response => {
      return response.data;
    })
    .then(status => {
      console.log("2", status);
      return status;
    })
    .catch(msg => {
      console.error("Error", msg);
    });
}

 * 
 * 
 */