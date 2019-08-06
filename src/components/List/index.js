import React from 'react';
import { Container } from './styles';
import { MdAdd } from 'react-icons/md';
import Card from '../Card';

export default function List({ data }) {
   const cards = data.cards;
  return (
      <Container>
          <header>
              <h4>{data.list_title}</h4>
              <button type="button">
                  <MdAdd  size={24} color="#fff"/>
              </button>
          </header>
          <ul>
            {cards.map(card =>  <Card key={card.card_id} data={card} />)}
          </ul>
      </Container>
  );
}
