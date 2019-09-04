import React,{ Component } from 'react';
import Header from '../Header';
import Board  from '../Board';
import Filter from '../Filter';
import { FiTrello,FiServer,FiPieChart,FiClipboard,FiCalendar } from "react-icons/fi";
import { Container,Navbar,Main,Content } from './styles';

//export default
class index extends Component{
constructor(props){
        super(props);
        //
    }
render(){
    return (
        <Container>
            <Navbar>
                <ul>
                    <li data-title="teste"><FiTrello size={25} /></li>
                    <li><FiClipboard size={25} /></li>
                    <li><FiServer size={25} /></li>
                    <li><FiPieChart size={25} /></li>
                    <li><FiCalendar size={25} /></li>
                </ul>
            </Navbar>
                <Main>
                        <Header/>
                        <Filter/>
                    <Content>
                     <Board />
                    </Content>
                        
                </Main>
        </Container>
    )
 }
}
export default index;