import React, { useState, useEffect } from 'react'

function Form() {

    const [name, setName] = useState();
    const [count, setCount] = useState(12);


    // Similar a componentDidMount e componentDidUpdate:
    useEffect(() => {
        // Atualiza o título do documento utilizando a API do navegador
        document.title = `You clicked ${count} times`;
    });

    function handleChange(e) {
        setName({[e.target.id]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(name)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" onChange={handleChange}></input>
                <button>Send</button>
            </form>


            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Form
