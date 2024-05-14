import logo from './logo.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <span style={{
        fontWeight:"bold",
        fontSize:"50px"
      }}>Card Tutorial</span>
      <div className='card-container'>
        <span style={{
          backgroundColor:"red",
          height:10,
          margin:100,
        }}>React</span>
        
      <img src={logo} alt='react image'>
      </img>
      <div className='card-description'>
      React is a popular frame work of Javascript
      <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies. React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. 
      </p>
      </div>
      </div>
    </div>
  );
}

export default App;
