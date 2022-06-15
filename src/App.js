import './App.css';
import React from 'react';
import Nav from './Components/Navbar';
import Main from './Components/Main';


function App() {
  const [click, setClick] = React.useState(true)
    

  function handleClick(){
      setClick(prevClick=> !prevClick)
  }
  
   const Styles= {
       backgroundColor: click ? "#FFFFFF" : "#000000"
   }

   const text_color={
    color: click ?  "#000000" : "#FFFFFF"
}



      return (
    <div id='page' style={Styles} className={click ? "darkPage" : "lightPage"}>
      <Nav toggleClick={handleClick} 
           bgColor={Styles} 
           txtColor={text_color}
           boolState={click}
      />
      <Main bgColor={Styles} 
            txtColor={text_color} 
      
      />
    </div>
  );
}

export default App;
