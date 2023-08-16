import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Book from './Pages/Book';
import Terms from './Pages/Terms';
import Gallery from './Pages/Gallery'
import SignUp from './Pages/SignUp';
import Account from './Pages/Account';
import Bookings from './Pages/Bookings';
import AdminPanel from './Admin/AdminPanel';
import AddRooms from './Admin/AddRooms';
import AdminBooking from './Admin/AdminBooking';
import AdminUsers from './Admin/AdminUsers';

function App() {
  return (
    
   <BrowserRouter>
    <Routes>
      <Route path='/addrooms' element={<AddRooms/>}></Route>
      <Route path='/' element={<AdminPanel/>}></Route>
      <Route path='/room/:id' element={<Book/>}></Route>
      <Route path='/gallery' element={<Gallery/>}></Route>
      <Route path='/terms' element={<Terms/>}></Route>


      <Route path='/adminUsers' element={<AdminUsers/>}></Route>
      <Route path='/adminBookings' element={<AdminBooking/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
