import "./App.css";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Book from "./Pages/Book";
import Terms from "./Pages/Terms";
import Gallery from "./Pages/Gallery";
import SignUp from "./Pages/SignUp";
import Account from "./Pages/Account";
import Bookings from "./Pages/Bookings";
import AdminPanel from "./Admin/Rooms/AdminPanel";
import AddRooms from "./Admin/Rooms/AddRooms";
import AdminBooking from "./Admin/Bookings/AdminBooking";
import AdminUsers from "./Admin/Users/AdminUsers";
import UpdateRoom from "./Admin/Rooms/UpdateRoom";
import AddBooking from "./Admin/Bookings/AddBooking";
import UpdateBooking from "./Admin/Bookings/UpdateBooking";
import AddUser from "./Admin/Users/AddUser";
import UpdateUser from "./Admin/Users/UpdateUser";
import Payment from './Pages/Payment'
import Register from "./Pages/Register";

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/room/:id" element={<Book />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/terms" element={<Terms />}></Route>
        <Route path="/account" element={<Account />}></Route>
        <Route path="/bookings" element={<Bookings />}></Route>
        <Route path="/payment" element={<Payment />}></Route>

        {/*Admin panel for rooms */}
        <Route path="/adminpanel" element={<AdminPanel />}></Route>
        <Route path="/addrooms" element={<AddRooms />}></Route>
        <Route path="/adminUsers" element={<AdminUsers />}></Route>
        <Route path="/adminBookings" element={<AdminBooking />}></Route>
        <Route path="/adminUpdate/:id" element={<UpdateRoom />}></Route>

        {/*Admin panel for booking */}
        <Route path="/addbooking" element={<AddBooking />}></Route>
        <Route path="/adminBooking" element={<AdminBooking />}></Route>
        <Route path="/updateBooking/:id" element={<UpdateBooking />}></Route>


        <Route path="/register" element={<Register />}></Route>



        {/*Admin panel for users */}
        <Route path="/adminuser" element={<AdminUsers />}></Route>
        <Route path="/adduser" element={<AddUser />}></Route>
        <Route path="/updateuser/:id" element={<UpdateUser />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
