import React from 'react';
import { DndProvider } from 'react-dnd';
import HTMl5backend from 'react-dnd-html5-backend';
import GlobalStyle from './styles/global.js';
import Home from './components/Home';

function App() {

    return (
        <DndProvider backend={HTMl5backend}>
            <Home/>
            <GlobalStyle/>
        </DndProvider>
     );
}
export default App;