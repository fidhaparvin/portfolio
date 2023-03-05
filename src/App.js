import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import './Style.css';
import { Routes, Route , BrowserRouter} from "react-router-dom";
import Header from './Header';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Footer from './Footer';
import ContactMe from './ContactMe';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App" style={{backgroundColor:'#fff'}}>
      <Header/>
      
    <Routes>
      <Route path="/" element={<Banner/>}/>
      <Route path="/aboutme" element={<AboutMe/>}/>
      <Route path="/contactme" element={<ContactMe/>}/>
    </Routes>
    <Footer/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
