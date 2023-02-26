import React from "react";
import ReactDOM from "react-dom/client";

const Title = ()=> (
  <h1>Nasmte React</h1>
)

const Container = ()=> (
  <header style={{display:"flex" , justifyContent:"space-between"}}>
    <div style={{width:"100px" ,height:"100px"}}> <img style={{objectFit:"contain" ,width:"100%",borderRadius:"50%"}} src="https://randomuser.me/api/portraits/women/34.jpg"/></div>
    <div style={{width:"100px" ,height:"100px"}}>
    <input type="search"/>
    </div>
    <div style={{width:"100px" ,height:"100px"}}>
    <img src="https://randomuser.me/api/portraits/men/72.jpg" style={{objectFit:"contain" ,width:"100%"}}/>
    </div>
  </header>
);


const root1 = ReactDOM.createRoot(document.getElementById("root1"));

root1.render(<Container/>);   