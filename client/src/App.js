import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

import Display from './components/Display/Display';

function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <CreateNotes/> */}
     <Display/>
    </div>
  );
}

export default App;
