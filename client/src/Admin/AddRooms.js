import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddRooms = () => {


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
.then(res =>{
  alert('Room added')
})
console.log(data)
}


  return (
    <div>
      <form>
        <div class="form-group">
          <label for="formGroupExampleInput">Title</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput"
            placeholder="Example input"
            onChange={e => setInput({...input, title: e.target.value})}
          />
        </div>

        <div class="form-group">
          <label for="formGroupExampleInput2">Price</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input"
            onChange={e => setInput({...input, price: e.target.value})}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Max. people</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input"
            onChange={e => setInput({...input, maxPeople: e.target.value})}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Description</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input"
            onChange={e => setInput({...input, desc: e.target.value})}
          />
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput2">Room number</label>
          <input
            type="text"
            class="form-control"
            id="formGroupExampleInput2"
            placeholder="Another input"
            onChange={e => setInput({...input, roomNumber: e.target.value})}
          />
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default AddRooms;
