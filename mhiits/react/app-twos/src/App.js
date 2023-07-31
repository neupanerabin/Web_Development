import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
       <Header name={324} age={23} address="kathmandu"></Header>
       <Header name="Prabesh" age={23} address="Pokhara"></Header>
       <Header name={88}/>
       <Header/>
       <Header/>


      </header>

     

    </div>
  );
}

export default App;
