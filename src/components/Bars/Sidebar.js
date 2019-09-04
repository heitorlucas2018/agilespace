import React,{ Component } from 'react';
import Forme   from '../Forms';
import { connect } from 'react-redux';
import { ContainerSideBar } from './styles';

class Sidebar extends Component{
constructor(props){
        super(props);
    console.log(props);
    }
render(){
    return (
        <ContainerSideBar isOpen={this.props.data.isOpen} >
                 <Forme/>
        </ContainerSideBar>
    )
 }
}
const mapStateToProps = (state) => {
  return{
      data: state.Sidbar
  }

}
export default connect(mapStateToProps, null)(Sidebar);