//import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom';
import APIDemo1 from './apidemo/APIDemo1';
//import './App.css';
import Demo1 from './reactdemo/Demo1';
import Demo2 from './reactdemo/Demo2';
import Navbar from './routingdemo/Navbar';

function App() {
  return (
    <div className="App">
       {/* <Demo1/>
       <Demo2/> */}

       {/* <APIDemo1/> */}
       <BrowserRouter>
            <Navbar/>
       </BrowserRouter>


    </div>
  );
}

export default App;
