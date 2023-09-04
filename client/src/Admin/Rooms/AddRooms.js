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
    roomNumber: "",
    image: "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    util: "",
    util1: "",
    util2: "",
    util3: "",
    util4: "",
    util5: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = await axios.post('http://localhost:3000/api/rooms/', input)
      .then(res => {
        alert('Room added')
      })
  
  }


  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      // marginTop: '10%',
    }}>
      <form style={{
        width: '40%'
      }}>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Title</label>
          <input
            type="text"
            className="form-control"
           
            onChange={e => setInput({ ...input, title: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Price</label>
          <input
            type="text"
            className="form-control"
           
            onChange={e => setInput({ ...input, price: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Max. people</label>
          <input
            type="text"
            className="form-control"
          
            onChange={e => setInput({ ...input, maxPeople: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Description</label>
          <input
            type="text"
            className="form-control"
           
            onChange={e => setInput({ ...input, desc: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Room number</label>
          <input
            type="text"
            className="form-control"
        
            onChange={e => setInput({ ...input, roomNumber: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Image</label>
          <input
            type="text"
            className="form-control"
        
            onChange={e => setInput({ ...input, image: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Image</label>
          <input
            type="text"
            className="form-control"
        
            onChange={e => setInput({ ...input, image1: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Image</label>
          <input
            type="text"
            className="form-control"
        
            onChange={e => setInput({ ...input, image2: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Image</label>
          <input
            type="text"
            className="form-control"
        
            onChange={e => setInput({ ...input, image3: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Image</label>
          <input
            type="text"
            className="form-control"
        
            onChange={e => setInput({ ...input, image4: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">util</label>
          <input
            type="text"
            className="form-control"
        
            onChange={e => setInput({ ...input, util5: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">util</label>
          <input
            type="text"
            className="form-control"
        
            onChange={e => setInput({ ...input, util: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">util</label>
          <input
            type="text"
            className="form-control"
        
            onChange={e => setInput({ ...input, util1: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">util</label>
          <input
            type="text"
            className="form-control"
        
            onChange={e => setInput({ ...input, util2: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">util</label>
          <input
            type="text"
            className="form-control"
        
            onChange={e => setInput({ ...input, util3: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">util</label>
          <input
            type="text"
            className="form-control"
        
            onChange={e => setInput({ ...input, util4: e.target.value })}
          />
        </div>

        <button style={{marginLeft: '40%', padding: '2%', borderRadius: '10px', backgroundColor: 'blue', marginTop: '5%'}} onClick={handleSubmit}><Link to={'/adminpanel'} style={{textDecoration: 'none', color: 'white'}}>Submit</Link></button>
      </form>
    </div>
  );
};

export default AddRooms;