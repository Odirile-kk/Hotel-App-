import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {createRoom} from '../../Redux/roomSlice'
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


const AddRooms = () => {
const dispatch = useDispatch()
const nav = useNavigate()

  const [input, setInput] = useState({
    title: "",
    price: "",
    maxPeople: "",
    desc: "",
    roomNumber: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = await axios.post('http://localhost:3000/api/rooms/', input)
      .then(res => {
        alert('Room added')
      })
  
  }


  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Title</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input"
            onChange={e => setInput({ ...input, title: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Price</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input"
            onChange={e => setInput({ ...input, price: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Max. people</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input"
            onChange={e => setInput({ ...input, maxPeople: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Description</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input"
            onChange={e => setInput({ ...input, desc: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Room number</label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input"
            onChange={e => setInput({ ...input, roomNumber: e.target.value })}
          />
        </div>

        <button onClick={handleSubmit}><Link to={'/'}>Submit</Link></button>
      </form>
    </div>
  );
};

export default AddRooms;