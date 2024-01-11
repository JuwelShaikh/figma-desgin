import './App.css';
import Head from './Components/HomePage/Header/Head';
import Navbar from './Components/HomePage/NavBar/Navbar';
import SubContent from './Components/HomePage/SubContainer/SubContent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Head/>
      <SubContent/>
    </div>
  );
}

export default App;
