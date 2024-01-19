import './App.css';
import Faq from './Components/HomePage/FAQ/Faq';
import Feedback from './Components/HomePage/Feedback/Feedback';
import Head from './Components/HomePage/Header/Head';
import Navbar from './Components/HomePage/NavBar/Navbar';
import PhotoContent from './Components/HomePage/Photo-content/PhotoContent';
import Protfolio from './Components/HomePage/Protfolio/Protfolio';
import SelfContent from './Components/HomePage/SelfContent/SelfContent';
import Services from './Components/HomePage/Services/Services';
import SubContent from './Components/HomePage/SubContainer/SubContent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Head/>
      <SubContent/>
      <PhotoContent/>
      <SelfContent/>
      <Services/>
      <Protfolio/>
      <Faq/>
      <Feedback/>
    </div>
  );
}

export default App;
