import produce from 'immer';
import {connect} from 'react-redux';
import { inData } from '../../services/action';
import { Component } from 'react';

export const move = (fromlist,from,tolist,to) => {
      return(produce(lists, draft=>{
        const dragged = draft[fromlist].cards[from];
        draft[fromlist].cards.splice(from,1);
        draft[tolist].cards.splice(to,0,dragged);
        }))
    };
export const movelist = (fromlist,from,tolist,to) => {
      return(produce(lists, draft=>{
        const dragged = draft[fromlist].cards[from];
        draft[fromlist].cards.splice(from,1);
        draft[tolist].cards.splice(to,0,dragged);
      }));
    };
export const addcard = (fromlist,from,data) => {
      return(produce(lists,draft=>{
        data.card_id = 'dgahj0';
        const dragged = data;
        draft[fromlist].cards.push(dragged)
      }));
    };
export const formFilter = (value) => {
      return(produce(lists,draft=>{
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
    };


export const lists = [];