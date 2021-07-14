import logo from './logo.svg';
import './App.css';
// we need our components!!
import {Users} from './components/Users'

function App() {
  return (
    <div className="App">
      <h2>Here we grab data from a back-end API</h2>
      {/* stick our components here */}
      <Users />
    </div>
  );
}

export default App;
