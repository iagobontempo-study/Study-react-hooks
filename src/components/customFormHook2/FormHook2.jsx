import React, { useState } from 'react'

import { Container } from '../styles'

function FormHook() {
    const [values, setValues] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    };

    const handleChange = (e) => {
        e.persist(); // ITS EXTREMELY NECESSARY!!
        setValues(values => ({ ...values, [e.target.id]: e.target.value })); // This is the basic change!
    };

    return (
        <Container>
            <h1>Custom Hook Form</h1>
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
                    <label htmlFor="test">Test</label>
                    <input type="text" id="test" onChange={handleChange}></input>
                </div>
                <button>Send</button>
            </form>
        </Container>
    )
}

export default FormHook
