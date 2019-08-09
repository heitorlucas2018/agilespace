import React from 'react';
import { Container } from './styles';

export default function Forms() {
    return (
        <Container>
            <form>
                <div>
                    <label>Filter 01</label>
                    <input type="text">
                    </input>
                </div>
                <div>
                    <label>Filter 02</label>
                        <span>
                            <input type="checkbox"/>
                            Bug
                        </span>
                        <span>
                            <input type="checkbox"/>
                            Sprint
                        </span>
                </div>
                <div>
                    <label>Filter 03</label>
                        <span>
                            <input type="checkbox"/>
                            Bug
                        </span>
                        <span>
                            <input type="checkbox"/>
                            Sprint
                        </span>
                </div>
            </form>
        </Container>
    )
}
