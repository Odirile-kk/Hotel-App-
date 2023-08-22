import React, { useEffect } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { getBookingOptions, deleteBooking } from "../../Redux/bookSlice";

const AdminBooking = () => {

    const dispatch = useDispatch();
    const { book } = useSelector((state) => state.book);


    useEffect(() => {
      
        dispatch(getBookingOptions())
        console.log("book items", book)
        
    }, [])


    const handleDelete = async (id) => {
        dispatch(deleteBooking(id))
        dispatch(getBookingOptions())
      }

    return (
        <div className="d-flex" id="wrapper">
            <div>
                <Sidebar />
            </div>

            <div id="page-content-wrapper" style={{}}>


                <div className="container-fluid px-4" style={{ marginTop: '10%' }}>
                    <button><Link to={'/addbooking'}>Make a booking</Link></button>

                    <div className="row my-5">
                        <h3 className="fs-4 mb-3">Bookings</h3>
                        <div className="col" style={{ boxShadow: "2px 2px 10px 0 rgba(22, 22, 26, 0.22)" }}>
                            <table className="table bg-white rounded shadow-sm  table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col" >#</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Check-in</th>
                                        <th scope="col">Check-out</th>
                                        <th scope="col">No. of adults</th>
                                        <th scope="col">No. of children</th>
                                        <th scope="col">No. of rooms</th>
                                        <th scope="col">...</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {book.map((booking) => (
                                        <tr key={booking._id}>
                                            <th scope="row">{booking._id}</th>
                                            <td>{booking.name}</td>
                                            <td>{booking.email}</td>
                                            <td>{booking.startDate}</td>
                                            <td>{booking.endDate}</td>
                                            <td>{booking.adults}</td>
                                            <td>{booking.children}</td>
                                            <td>{booking.rooms}</td>
                                            <td>
                                                <button><Link to={`/updateBooking/${booking._id}`}>Update</Link></button>
                                                <button onClick={e => handleDelete(booking._id)}>delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AdminBooking