import React from 'react';
import { loadList } from '../../services/api';
import List  from '../List';
import { Container } from './styles';

const lists = loadList();

export default function Board() {
  return (
    <Container>
      { lists.map(list => <List key={list.list_title} data={list} />)}
    </Container>
  );
}
