import './App.css';
import Head from './Components/HomePage/Header/Head';
import Navbar from './Components/HomePage/NavBar/Navbar';
import PhotoContent from './Components/HomePage/Photo-content/PhotoContent';
import SubContent from './Components/HomePage/SubContainer/SubContent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Head/>
      <SubContent/>
      <PhotoContent/>
    </div>
  );
}

export default App;
