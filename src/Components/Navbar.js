import React from "react";



function Nav(props){
    let logo = 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
  
    const Nav_text_light= {
        color: props.boolState ? "#000000" : "#A9A9A9"
    }
    
    const Nav_text_dark= {
        color: props.boolState ? "#D3D3D3" : "#FFFFFF"
    }

    const Nav_header={
        color: props.boolState ? "#61DBFB" : "#FFFFFF"
    }

   return(
    <div id="navbar" className={props.boolState ? "navDarkShadow" : "navLightShadow"}>
      <img src={logo} className='logo' alt="react-logo"/>
        <h1 className="header" style={Nav_header}>ReactFacts</h1>
        <div className="btn">
            <h3 className="light" style={Nav_text_light}>Light</h3>
            <input 
             id="btn"
             style={props.bgColor}
             className={props.boolState ? "toggleDark" : "toggleLight"}
             type="checkbox" 
             onClick={props.toggleClick} 
             />
            <h3 className="dark" style={Nav_text_dark}>Dark</h3>
        </div>
    </div>
    )
}

export default Nav;