import React from 'react';
import Header from '../Header/';
import Board  from '../Board/';
import Forme   from '../Forms/';
import Filter from '../Filter/';
import { FiTrello,FiServer,FiPieChart,FiClipboard } from "react-icons/fi";
import { Container,Navbar,Main,Content, Sidebar } from './styles';

export default function index() {

    return (
        <Container>
            <Navbar>
                <ul>
                    <li><FiTrello size={25} /></li>
                    <li><FiClipboard size={25} /></li>
                    <li><FiServer size={25} /></li>
                    <li><FiPieChart size={25} /></li>
                </ul>
            </Navbar>
                <Main>
                        <Header/>
                        <Filter/>
                    <Content>
                        <Board />
                           <Sidebar isOpen={true} >
                               <Forme/>
                           </Sidebar>
                    </Content>
                        
                </Main>
        </Container>
    )
}