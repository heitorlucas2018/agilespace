import React,{ useState, useContext } from 'react';
import { Container } from './styles';
import boadrContext from '../Board/Context';
import { Form, Input, Header, Icon, Select, Button } from 'semantic-ui-react';

const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]

export default function Forms() {
    const [state,setState] = useState({
        titulos:'',
        sprints:'',
        status:'',
        membro:''
    })
    
    const { formFilter } = useContext(boadrContext);
    
    const filtros = { titulos: state.titulos, sprints: state.sprints, status : state.status, membro : state.membro}
    
    const formInFilter = (name,value) => {
        formFilter(value)
    }
    
    const inState = (type,name = '', value = '') => {
            switch (type) {
                case 'in' :       
                    formInFilter(name,value)             
                    filtros[name]= value
                 return filtros;
                case 'clear':
                    filtros.titulos='';
                    filtros.sprints='';
                    filtros.status ='';
                    filtros.membro ='';
                  return filtros;
                default:
                     return {};
            }
             
       }
    
       const changer  =(e, { name, value }) => setState(inState('in',name,value));
       const bntclick =(e) => setState(inState('clear'));

            console.log(state);

    return (
            
        <Container>
            <Header as='h4' textAlign='left'>
                Filtro
                <span
                    onClick={bntclick}
                    >
                    <Icon name='close'/>
                </span>                
            </Header>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field
                                id='form-input-control-first-name'
                                control={Input}
                                label='Titulo ou sub-titulo dos cards'
                                placeholder='Titulo ou sub-titulo dos cards'
                                name='titulos'
                                value={filtros.titulos}
                                onChange={changer}
                            />
                        </Form.Group>
                        <Form.Group widths='equal'>
                        <Form.Field
                                control={Select}
                                options={genderOptions}
                                label={{ children: 'Strint', htmlFor: 'form-select-control-gender' }}
                                placeholder='Sprint'
                                search
                                name='sprints'
                                value={filtros.sprints}
                                onChange={changer}
                                searchInput={{ id: 'form-select-control-gender' }}
                            />
                        </Form.Group>
                        { (filtros.sprints.length > 0) &&(
                            <Form.Group widths='equal'>
                            <Form.Field
                                    control={Select}
                                    options={genderOptions}
                                    label={{ children: 'Status', htmlFor: 'form-select-control-gender' }}
                                    placeholder='Status'
                                    search
                                    name='status'
                                    value={filtros.status}
                                    onChange={changer}
                                    searchInput={{ id: 'form-select-control-gender' }}
                                />
                            </Form.Group>)
                        }
                        <Form.Group widths='equal'>
                        <Form.Field
                                control={Select}
                                options={genderOptions}
                                label={{ children: 'Menbro da equipe:', htmlFor: 'form-select-control-gender' }}
                                placeholder='Membro da equipe'
                                search
                                name='membro'
                                value={filtros.membro}
                                onChange={changer}
                                searchInput={{ id: 'form-select-control-gender' }}
                            />
                        </Form.Group>
                     </Form>
            <Button onClick={bntclick}>Limpar Filtros</Button>
        </Container>
    )
}
