import React, { useState } from 'react';

 // * Without using Form * //
/*const App = () => {
    const [name, setName] = useState("");
    const [fullName, setFullName] = useState();

    const InputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }

    const onSubmit = () => {
        setFullName(name);
    }

    return (
    <>
    <div>
        <h1> Hello {fullName}</h1>
        <input type="text" placeholder="Enter your name here"
            onChange={InputEvent}
            value={name}
        />
        <button onClick={onSubmit}>Click Me 👍</button>
    </div>
    </>
    );
}*/

// * Using Form * //
const App = () => {
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");

    const [lastName, setLastName] = useState("");
    const [finalLastName, setFinalLastName] = useState("");

    const InputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }

    const secondInputEvent = (event) => {
        console.log(event.target.value);
        setLastName(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setFirstName(name);
        setFinalLastName(lastName);
    }

    return (
    <>
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <h1> Hello {firstName} {finalLastName}</h1>
                    <input type="text" placeholder="Enter your first name"
                        onChange={InputEvent}
                        value={name}
                    />
                    <br/>
                    <input type="text" placeholder="Enter your last name"
                        onChange={secondInputEvent}
                        value={lastName}
                    />
                    <button type="submit">Click Me 👍</button>
                    </div>
                </form>
        </div>
    </>
    );
}

export default App;