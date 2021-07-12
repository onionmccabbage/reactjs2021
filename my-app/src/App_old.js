import logo from './logo.svg';
import './App.css';

// we should write components in their own package
function ItemRendererComp(props){ // props will be the properties of this component
  return <h4>{props.f} {props.l}</h4>
}

function App() {
  const user = 'Ethel'
  let model = { usr: {f:'lisa', l:'Su', fb: 'https://graph.facebook.com/amd/picture?type=normal'} }
  let names = [
    { f: 'Grace', l: 'Hopper' }, 
    { f: 'Catherine', l: 'Johnson' }, 
    { f: 'Ada', l: 'Lovelace' }, 
    { f: 'Timnit', l: 'Gebru' },
    { f: 'Ethel', l: 'Skronk' },
  ]

  let namesList = names.map( (name)=>{
    return <li key={name.f} >{name.f} {name.l}</li>
  } )
  
  const myF = (e)=>{
    console.log(e.target.value)
    model.usr.f = e.target.value
  }


  return (
    <div className="App">
      <ItemRendererComp f={model.usr.f} l={model.usr.l}/>

      <h3>{1+2}</h3>
      <p>This is JSX - JavaScript NOT html</p>
      <p>lower-case for html tags Initial Cap for React Components</p>
      <img src={model.usr.fb} />
      <ul>
        {namesList}
      </ul>
      <h4>Here is a simple form</h4>
      <form>
        <input id='frmUsername' value={model.usr.f} onChange={myF} />
      </form>
    </div>
  );
}

export default App;
