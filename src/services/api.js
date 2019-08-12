import React from 'react';
import Axious from 'axios';

export function loadList() {
  const api = Axious.get('https://localhost/teste/WSkey/',)
  .then((response)=>{ console.log('1',response)})
  .then((status)=>{ console.log('2',status)})
  .catch((msg)=>{ console.error('Error',msg)})
  return [{}]
}