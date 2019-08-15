import React from 'react'

import { Container } from '../styles'

import useFormHook from './useFormHook'

function FormHook() {
    const { values, handleChange, handleSubmit } = useFormHook(action);

    function action() {
        console.log(values)
    }

    return (
        <Container>
            <h1>Custom State 2+</h1>
            <hr />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={handleChange}></input>
                </div>
                <div>
                    <label htmlFor="company">Comp</label>
                    <input type="text" id="company" onChange={handleChange}></input>
                </div>
                <button>Send</button>
            </form>
        </Container>
    )
}

export default FormHook
