import React from 'react';
import { DndProvider } from 'react-dnd';
import HTMl5backend from 'react-dnd-html5-backend';
import GlobalStyle from './styles/global.js';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <DndProvider backend={HTMl5backend}>
            <Sidebar/>
            <GlobalStyle/>
        </DndProvider>
     );
}
export default App