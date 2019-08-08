/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Collapse,Button } from 'react-bootstrap';
import { Container } from './styles';
import { FiFilter } from 'react-icons/fi';
import Forms    from '../Forms';

export default function index() {

    const [open, setOpen] = useState(false);

    return (
        <Container>
              <Button
                    variant="flat" 
                    onClick={() => setOpen(!open)}
                    aria-controls="filter-collapse-menu"
                    aria-expanded={open}
                >
                  <FiFilter/>  Filters
                </Button>
                <Collapse in={open}>
                    <div id="filter-collapse-menu">
                        <Forms />
                    </div>
                </Collapse>
        </Container>
    )
}
