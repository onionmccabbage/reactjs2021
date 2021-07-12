
import React, { useState } from "react";
export default function App() {
  // what about the names 'state' and 'setState'.....
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  // here's another stateful member
  const [age, setAge] = useState(42)
//   const [fruit, setFruit] = useState('Durian')
//   cosnt [usr, setUsr] = useState( {f:'Ada', l:'Lovelace'} )

  const handleInputChange = (event) => {
    setState((prevProps) => ({
      // what's this three dots about?
      ...prevProps, // 'unpacks' a collection to it's members
      [event.target.name]: event.target.value
    }));
    // console.log(event.target)
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log(state);
  };

  return (
    <div className="App">
          <input id='frmAge' name='age' value={age} onChange ={ (e)=>{setAge(e.target.value)}} />
        <div className="form-control">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label></label>
          <button onClick={handleSubmit} type="submit">Login</button>
        </div>
    </div>
  );
}