/* eslint-disable react-hooks/rules-of-hooks */
import React, {Component } from 'react';
import { Collapse,Button } from 'react-bootstrap';
import { Container } from './styles';
import { FiFilter } from 'react-icons/fi';
import Forms    from '../Forms';
import { connect } from 'react-redux';

class index extends Component {
constructor(){
    const open = {};
    function onClickAction(data){
        console.log('teste click => ',data);
            
    }
    
    return (
        <Container>
              <Button
                    variant="flat" 
                    onClick={() => onClickAction(!open)}
                    aria-controls="filter-collapse-menu"
                    aria-expanded={open}
                >
                  <FiFilter size={20}/>
                </Button>
                
                <Collapse in={open}>
                    <div id="filter-collapse-menu" >
                        <Forms />
                    </div>
                </Collapse>
                
        </Container>
    )
}
}

const mapStateToProps = (state) => {
        console.log('state => ',state);
        return{
            myMsg : state.msg,
            data: state.data
        }

}
const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, mapDispatchToProps)(index)
