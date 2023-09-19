import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { postBookingOptions } from '../../Redux/bookSlice';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";


const AddBooking = () => {
const dispatch = useDispatch()
const nav = useNavigate()

  const [input, setInput] = useState({
    roomName: "",
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
    const selectedStartDate = date[0].startDate;
    const selectedEndDate = date[0].endDate;
  
    const updatedBookingOptions = {

      roomName: input.roomName,
      email: input.email,
      startDate: selectedStartDate,
      endDate: selectedEndDate,
      adults: input.adults,
      children: input.children,
      rooms: input.rooms,

    };
  
    setInput(updatedBookingOptions); // Update local state
    dispatch(postBookingOptions(updatedBookingOptions)); // Dispatch the action
  console.log(input)
  }


  return (
    <div 
    style={{
      padding: '10%',
      width: '60%',
      marginLeft: '20%'
  }}
    >
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
       
            onChange={e => setInput({ ...input, name: e.target.value })}
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
            
            onChange={e => setInput({ ...input, adults: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">No. of children</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            
            onChange={e => setInput({ ...input, children: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">No. of rooms</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            
            onChange={e => setInput({ ...input, rooms: e.target.value })}
          />
        </div>

        <button onClick={handleSubmit}><Link to={'/adminBooking'}>Submit</Link></button>
      </form>
    </div>
  );
};

export default AddBooking;