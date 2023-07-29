import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Common/Header';
import { Footer } from './Components/Common/Footer';
function App() {
  return (
   <>
  <Header/>
      <Routes>
        <Route path='' element={<Home/>} ></Route>
        <Route path='/about' element={<Home/>} ></Route>
      </Routes>
      <Footer/>
    
   </>
  );
}

export default App;
