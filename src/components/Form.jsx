import React, { useState, useEffect } from 'react'

import { Container } from './styles'

function Form() {
    const [name, setName] = useState();
    const [count, setCount] = useState(12);
    const [isOpen, setIsOpen] = useState(true)


    // Similar a componentDidMount e componentDidUpdate:
    useEffect(() => {
        // Atualiza o título do documento utilizando a API do navegador
        document.title = `You clicked ${count} times`;
    });

    function handleChange(e) {
        setName({[e.target.id]: e.target.value})
    }

    function handleOpen (e) {
        if (isOpen === true) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
        console.log(isOpen)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(name)
    }

    return (
        <Container>
            <h1>Simple State</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={handleChange}></input>
                <button>Send</button>
            </form>


            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>

            <hr/>

            { isOpen ? <div>Aberto</div> : null }
            <button onClick={handleOpen}>OPEN</button>
        </Container>
    )
}

export default Form
