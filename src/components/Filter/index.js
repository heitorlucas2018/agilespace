/* eslint-disable react/no-direct-mutation-state */
import React, {Component } from 'react';
import { Container } from './styles';
import { FiFilter } from 'react-icons/fi';
import { connect } from 'react-redux';
import { hello,btnview } from './actions';

const open = {};

class index extends Component {
constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
}
onClick = (data) => {
    this.state.isOpen = !data;
    this.props.onClickAction(btnview,{isOpen:!data});
};
componentDidMount() {
    this.props.onClickAction()  
}
render(){
        return (
            <Container>
                <button
                        variant="flat" 
                        onClick={() => this.onClick(this.state.isOpen)}
                        aria-controls="filter-collapse-menu"
                        aria-expanded={open}
                    >
                    <FiFilter size={20}/>
                    </button>
            </Container>
        )
    };
}


const mapStateToProps = (state) => {
        return{
            msg: state.isOpen
        }

}
const mapDispatchToProps = (dispatch) => {
        return {
            onClickAction : (type,data) => dispatch(hello(type,data))
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(index);
