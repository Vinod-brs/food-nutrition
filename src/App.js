import { Route, Routes } from 'react-router-dom';                                                                                                                         
import './App.css';
import { Home } from './modules/Home';
import { Head } from './modules/Head';




function App() {
  return (
  <>
    <Head />
    <Routes>
    <Route path='/' element={<Home />} />
    </Routes>
   
  </>
   
  );
}

export default App;
