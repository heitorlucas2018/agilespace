import React,{ useState } from 'react';
import { Container } from './styles';

export default function Header() {
  const [isOpen,setOpen] = useState(false);
    
    console.log(isOpen);
    return (
        <Container>
            <header>
               <h4> Board Proton </h4>
            </header>
        </Container>
        
    )
}
