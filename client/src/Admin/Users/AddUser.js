import React from 'react'

const AddUser = () => {
  return (
    <div>
        <div>
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input
            type="text"
            className="form-control"
       
            // onChange={e => setInput({ ...input, title: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Email</label>
          <input
            type="text"
            className="form-control"
         
            // onChange={e => setInput({ ...input, price: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Room Type</label>
          <input
            type="text"
            className="form-control"
           
            // onChange={e => setInput({ ...input, maxPeople: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">No. of Adults</label>
          <input
            type="text"
            className="form-control"
           
            // onChange={e => setInput({ ...input, desc: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">No. of children</label>
          <input
            type="text"
            className="form-control"
           
            // onChange={e => setInput({ ...input, roomNumber: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">No. of Rooms</label>
          <input
            type="text"
            className="form-control"
           
            // onChange={e => setInput({ ...input, roomNumber: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Dates</label>
          <input
            type="text"
            className="form-control"
            
            // onChange={e => setInput({ ...input, roomNumber: e.target.value })}
          />
        </div>

        {/* <button onClick={handleSubmit}><Link to={'/'}>Submit</Link></button> */}
      </form>
    </div>
    </div>
  )
}

export default AddUser