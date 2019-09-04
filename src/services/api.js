import {Component} from 'react';
import Axious from 'axios';

class loadList extends Component{
  constructor(props){
    super(props);
    console.log('API',props)
  }

  /*
  const api = Axious.get('http://localhost:3000/api/',)
  .then((response)=>{ console.log('1',response)})
  .then((status)=>{ console.log('2',status)})
  .catch((msg)=>{ console.error('Error',msg)})
    */
}

const mapStateToProps = () =>{
 return '';
}
const mapDispatchToProps = (dispatch) => {
  return {
      inData : (type,data) => dispatch(inData(type,data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(loadList);
