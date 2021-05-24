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
/*
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
                    <button type="submit">Submit </button>
                    </div>
                </form>
        </div>
    </>
    );
}
*/

const App = () => {
    const [fullName, setFullName] = useState({
        fName: "",
        lName: "",
    });
    
    const InputEvent = (event) => {
        console.log(event.target.value);
        // setName(event.target.value);

        const value = event.target.value;
        const name = event.target.name;

        setFullName((previosValue) => {
            console.log(previosValue);
            if (name === 'fName'){
                return {
                fName: value,
                lName: previosValue.lName,
                };
            } else if (name === 'lName'){
                return {
                fName: previosValue.fName,
                lName: value,
                };
            }
        });
    }

    const onSubmit = (event) => {
        event.preventDefault();
        alert("Form Submitted");
    }

    return (
    <>
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <h1> Hello {fullName.fName} {fullName.lName} </h1>
                    <input type="text" placeholder="Enter your first name"
                        name="fName"
                        onChange={InputEvent}
                        value={fullName.fName}
                    />
                    <br/>
                    <input type="text" placeholder="Enter your last name"
                        name="lName"
                        onChange={InputEvent}
                        value={fullName.lName}
                    />
                    <button type="submit"> Submit </button>
                    </div>
                </form>
        </div>
    </>
    );
}


export default App;