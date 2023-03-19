import { useState } from 'react';
import './App.css';
import Hello from './Components/Greet';

function App() {

const [allValues, setValues]=useState({fname:"Mobi",lname:"Mack",age:34});

function update(){
setValues({...allValues,fname:"Matt", lname:"MaxXx", age :19})
}

const [getinghigh, setgetinghigh]=useState({fname:"Hamza",age:"29"})


function getHigh() {
  setgetinghigh({...getHigh,fname:"Habibi", age:16})
}

  return (
    <div className="App">

      <h1>Hello World <br />
        i'm the first react app
      </h1>
      
      <Hello name="MarG" age="30">
        <p>I am child Prop</p>
      </Hello>
      <>
      <h3>Name is {getinghigh.fname}and age is {getinghigh.age}</h3>
        <button onClick={getHigh}>Action</button>
        </>
      <Hello name="Mobi" age= "35">

        <p>WE Just added children props</p>
        <h2>{allValues.fname} is my First Name and {allValues.lname} is my Last Name. I am {allValues.age} year old. </h2>
        <button onClick={update}>Update</button>


      </Hello>


    </div>
  );
}

export default App;
