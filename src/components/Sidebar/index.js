import React,{ Component } from 'react';
import Header from '../Header/';
import Board  from '../Board/';
import Forme   from '../Forms/';
import Filter from '../Filter/';
import { connect } from 'react-redux';
import { FiTrello,FiServer,FiPieChart,FiClipboard,FiCalendar } from "react-icons/fi";
import { Container,Navbar,Main,Content, Sidebar } from './styles';

//export default
class index extends Component{
constructor(props){
        super(props);        
    }
componentDidMount(){
    console.log('Sidebar Motado =>',this.props);
}
render(){
    console.log('Sidebar Motado =>',this.props.data.isOpen)
    return (
        <Container>
            <Navbar>
                <ul>
                    <li><FiTrello size={25} /></li>
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
                           <Sidebar isOpen={this.props.data.isOpen} >
                               <Forme/>
                           </Sidebar>
                    </Content>
                        
                </Main>
        </Container>
    )
 }
}
const mapStateToProps = (state) => {
    console.log('SideBar state => ',state);
  return{
      data: state
  }

}
export default connect(mapStateToProps, null)(index);