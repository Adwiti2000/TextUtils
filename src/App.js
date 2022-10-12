import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About'
import { useState } from 'react';
import Alert from './Components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light')
  const [alert,setAlert]=useState(null);
  

  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
    setAlert(null);
    },2000)

  }

  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode has been enabled","success")
      //document.title='textUtils-dark mode'
    }
    else
   {
    setMode('light');
    document.body.style.backgroundColor='white'
    showAlert("Light mode has been enabled","success")
   }
  }
  return (
    <>
    <Router>
<Navbar title="textUtil" home="Home" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
            {/*<About />*/}
          </Route>
          <Route exact path="/" element={<TextForm heading="Try textUtils: convert you text to uppercase,lowercase or count words" showAlert={showAlert} mode={mode}/>} >
            {/* use of exact:
            /users -->component 1
  /users/home -->component 2 */}
          {/*<TextForm heading="Enter your text here" showAlert={showAlert} mode={mode}/>*/}
          </Route>
 </Routes>

{/*<About/>*/}
</div>
</Router>
    </>
  );
}

export default App;
