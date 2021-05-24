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

// * Login Form with First Name and Last name * //
/*
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
*/

// * Login Form with First name, Last name, Email and Mobile no. * //
const App = () => {
    const [fullName, setFullName] = useState({
        fName: "",
        lName: "",
        email: "",
        mobile: "",
    });
    
    const InputEvent = (event) => {
        console.log(event.target.value);
        // setName(event.target.value);

        const {value, name} = event.target;

        setFullName((previousValue) => {
            console.log(previousValue);
            if (name === 'fName'){
                return {
                fName: value,
                lName: previousValue.lName,
                email: previousValue.email,
                mobile: previousValue.mobile
                };
            } else if (name === 'lName'){
                return {
                fName: previousValue.fName,
                lName: value,
                email: previousValue.email,
                mobile: previousValue.mobile
                };
            }
            else if (name === 'email'){
                return {
                fName: previousValue.fName,
                email: previousValue.lName,
                email: value,
                mobile: previousValue.mobile
                };
            }
            else if (name === 'mobile'){
                return {
                fName: previousValue.fName,
                mobile: previousValue.lName,
                email: previousValue.email,
                mobile: value
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
                    <h1> 
                    Hello {fullName.fName} {fullName.lName} 
                    </h1>
                    <p> {fullName.email} </p>
                    <p> {fullName.mobile} </p>
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
                    <br/>
                    <input type="email" placeholder="Enter your email"
                        name="email"
                        onChange={InputEvent}
                        value={fullName.email}
                        autoComplete="off" // To hide the auto display of email entered
                    />
                    <br/>
                    <input type="number" placeholder="Enter your mobile no."
                        name="mobile"
                        onChange={InputEvent}
                        value={fullName.mobile}
                    />
                    <button type="submit"> Submit </button>
                    </div>
                </form>
        </div>
    </>
    );
}

export default App;