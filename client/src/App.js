import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Book from './Pages/Book';
import Terms from './Pages/Terms';
import Gallery from './Pages/Gallery'
import SignUp from './Pages/SignUp';

function App() {
  return (
    
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}></Route>
      <Route path='/book' element={<Book/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
      <Route path='/terms' element={<Terms/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
