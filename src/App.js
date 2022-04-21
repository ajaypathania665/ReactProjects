// import logo from "./logo.svg";
//import { useState } from "react";
import "./App.css";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React, {useState} from "react"; // shortcut imrs

function App() {

   const [mode , setmode] = useState('light');  // whether dark mode is enable or not 
    const [modeButton , setmodeButton] = useState('Enable dark mode');


  const togglemode =()=>{
    if(mode == 'light'){


setmode('dark');
document.body.style.background = "blue";
       
    }
    
  
    else {
      setmode('light');
      document.body.style.background = "white";

    }
setmodeButton("Enable light Mode")

   }
  return(
  <>
 <Navbar tittle = "Textutils" About="About" mode = {mode} togglemode = {togglemode} modeButton={modeButton}/>
 <div className="container">
   <TextForm heading ="Enter something to Analyze" mode={mode}/> 

{/* <About/>  */}

 </div>

  </>
  );
}

export default App;
