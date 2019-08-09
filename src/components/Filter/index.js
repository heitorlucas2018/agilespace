/* eslint-disable react-hooks/rules-of-hooks */
import React, {Component } from 'react';
import { Collapse,Button } from 'react-bootstrap';
import { Container } from './styles';
import { FiFilter } from 'react-icons/fi';
import Forms    from '../Forms';
import { connect } from 'react-redux';
import { hello,btnview } from './actions';
const open = {};
class index extends Component {
constructor(props){
        super(props);
        console.log('Constructor',props)
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
    console.log('Filter montado => ', this.props, this.state);
  
}
render(){
    console.log('filter => ',this.props,this.state)
        return (
            <Container>
                <Button
                        variant="flat" 
                        onClick={() => this.onClick(this.state.isOpen)}
                        aria-controls="filter-collapse-menu"
                        aria-expanded={open}
                    >
                    <FiFilter size={20}/>
                    </Button>
                    
                    <Collapse in={false}>
                        <div id="filter-collapse-menu" >
                            <Forms />
                        </div>
                    </Collapse>
                    
            </Container>
        )
    };
}


const mapStateToProps = (state) => {
    console.log('mapStateToProps filter => ',state)
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
