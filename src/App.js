import React from 'react';
import { DndProvider } from 'react-dnd';
import HTMl5backend from 'react-dnd-html5-backend';
import GlobalStyle from './styles/global.js';
import Header from './components/Header';
import Board  from './components/Board';
import Filter from './components/Filter';

function App() {
    return (
        <DndProvider backend={HTMl5backend}>
            <Header/>   
            <Filter/>
            <Board/>
            <GlobalStyle/>
        </DndProvider>
     );
}
export default App