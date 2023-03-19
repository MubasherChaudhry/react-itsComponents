import './App.css';
import Hello from './Components/Greet';

function App() {
  return (
    <div className="App">
      <h1>Hello World <br />
        i'm the first react app
      </h1>
      <Hello name="MarG" age="30">
        <p>I am child Prop</p>
      </Hello>
      <Hello name="Hamza"age= "29">
        <button>Action</button>
      </Hello>
      <Hello name="Mobi" age= "35">
        <p>WE Just added children props</p>
      </Hello>
    </div>
  );
}

export default App;
