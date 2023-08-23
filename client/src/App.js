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
import { useSelector } from "react-redux";

function App () {

  const isAuthenticated = useSelector(state => state.auth.accessToken !== null);
  const isAdmin = useSelector(state => state.users.isAdmin);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/room/:id" element={<Book />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/terms" element={<Terms />} />

        {isAuthenticated ? (
          <>
            <Route path="/account/:id" element={<Account />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/payment" element={<Payment />} />

           
          </>
        ) : (
          // Redirect unauthenticated users to landing page
          <Route path="/" element={<LandingPage/>} />
        )}
         {/* Protected Admin Routes */}
         {!isAdmin && (
              <>
                <Route path="/adminpanel" element={<AdminPanel />} />
                <Route path="/addrooms" element={<AddRooms />} />
                <Route path="/adminUsers" element={<AdminUsers />} />
                <Route path="/adminBookings" element={<AdminBooking />} />
                <Route path="/adminUpdate/:id" element={<UpdateRoom />} />
                <Route path="/addbooking" element={<AddBooking />} />
                <Route path="/updateBooking/:id" element={<UpdateBooking />} />
                <Route path="/adduser" element={<AddUser />} />
                <Route path="/updateuser/:id" element={<UpdateUser />} />
              </>
            )}

        <Route path="/" element={<LandingPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
