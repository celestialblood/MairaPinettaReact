
import './App.css';
import Contador from './components/Contador';  
import logo from './logo.svg';
import Navbar from './components/Navbar';
import itemListContainer from './components/itemListContainer';

function App() {
  return (
    <div>
      <Navbar>
        <cartWidget></cartWidget> 
      </Navbar>
      <itemListContainer></itemListContainer>
      <Contador>Contador</Contador>


    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;

