import React from "react";
import ROUTES from "Constants/routes";
import { Link } from "react-router-dom";

function PrintTime(){
  console.log("Hello World")
  console.log(window.api.currentDateTime("wad"))
}


const myStyle={
  color: "blue", 
  textAlign: "center",
}
const styleLogin={
  textAlign:"center", 
}

const styleBottom={ 
  textAlign:"left", 
  position:"absolute",
  bottom: 0,
  backgroundColor:"white", 

}
const styleLoginToRegistore={ 
  color: "black",
  textAlign:"center",
}
const styleLoginBackground={  
  border: '2px solid black',
  width: '20rem',
  height: '15rem',
  marginLeft:"auto", 
  marginRight:"auto",
  backgroundColor: "white",
}
const styleBackground={ 
  height:'35em',
  width:'100%',
  backgroundColor:"lightgray",  
}

const Alert= ()=> {
  alert("EMPLOYEE LOGIN");
}


const Alert2= ()=> {
  alert("PASSWORD");
}


class Welcome extends React.Component {


  render() {
    return (
      <React.Fragment>
        <PrintTime></PrintTime>
        <section className="section">
            <section style={styleBackground }className="showcase">
              <h1 style={myStyle}>Registore</h1>

            <section style={styleLoginBackground}className="showcaseLogin">
              <h3 style={styleLoginToRegistore}>Log into Registore</h3>

              <div style={{width:"18em", height:"2em", textAlign:"center"}} className="searchBar" >
              <input type="text" placeholder="EMPLOYEE ID"/> <br/> <br/>
              <button style={{backgroundColor:"lightblue", width:"18em", height:"2em", textAlign:"center"}} 
              onClick={Alert}>LOGIN</button>
            </div>
          </section>
        </section>

            <div style={styleBottom} className="bottom">
              <h3>Contact</h3> 
              <h4>Email</h4>
            </div>
            <div>
              <Link to={ROUTES.REGISTER}>Link to the Register Page</Link> <br />
              <Link to={ROUTES.LOCALIZATION}>Changing locales.</Link> <br />
              <Link to={ROUTES.UNDOREDO}>Undo/redoing actions.</Link> <br />
              <Link to={ROUTES.CONTEXTMENU}>Custom context menu.</Link> <br />
              <Link to={ROUTES.INVENTORY}>Link to Inventory Page</Link> <br />
              
            </div>
          
        </section>
      </React.Fragment>
    );
  }
}

export default Welcome;
