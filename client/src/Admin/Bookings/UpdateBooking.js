import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { postBookingOptions, updateBooking } from '../../Redux/bookSlice';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

//work on the put method its returning internal server error 500

const AddBooking = () => {
const dispatch = useDispatch()


const { id } = useParams();
    const { book } = useSelector((state) => state.book);

    const booking = book.find((booking) => booking._id === id);


    useEffect(() => {
        if (booking) {
            setInput({
                name: booking.name || "",
                email: booking.email || "",
                adults: booking.adults || "",
                children: booking.children || "",
                rooms: booking.rooms || ""
            });
        }
        console.log(booking)
    }, [booking]);

  const [input, setInput] = useState({
    name: "",
    email: "",
    adults: "",
    children: "",
    rooms: ""
  })

  const [openDate, setOpenDate] = useState(false);

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleSubmit = async () => {
    console.log('this id is from useparams', id)
    try {
      const selectedStartDate = date[0].startDate;
      const selectedEndDate = date[0].endDate;
  
      const updatedBookingOptions = {
        name: input.name,
        email: input.email,
        startDate: selectedStartDate,
        endDate: selectedEndDate,
        adults: input.adults,
        children: input.children,
        rooms: input.rooms,
      };
  
      setInput(input, date);
      await dispatch(updateBooking({id, ...updatedBookingOptions }));
      console.log('this is my id', id, input, date);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            value={input.name}
            onChange={e => setInput({ ...input, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Email</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            value={input.email}
            onChange={e => setInput({ ...input, email: e.target.value })}
          />
        </div>
        
        <div className="form-group">
        <div className="headerSearch">
        <label htmlFor="formGroupExampleInput2">Dates</label>
              {/* <MdCalendarMonth /> */}
              <span
                onClick={() => setOpenDate(!openDate)}
                className="form-control"
              >
                {`${format(date[0].startDate, "MM/dd/yyyy")} 
    to ${format(date[0].endDate, "MM/dd/yyyy")}`}
              </span>

              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                />
              )}
            </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">No. of adults</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            value={input.adults}
            onChange={e => setInput({ ...input, adults: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">No. of children</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            value={input.children}
            onChange={e => setInput({ ...input, children: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">No. of rooms</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            value={input.rooms}
            onChange={e => setInput({ ...input, rooms: e.target.value })}
          />
        </div>

        <button onClick={handleSubmit}><Link to={'/'}>Submit</Link></button>
      </form>
    </div>
  );
};

export default AddBooking;