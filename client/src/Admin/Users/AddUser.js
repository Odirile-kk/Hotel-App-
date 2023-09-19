import React from 'react'

const AddUser = () => {
  return (
    <div>
       <div className="account">
        <div className="card-container">
          <div>
            <div className="row">
              <div className="col-xl-8">
                <div className="acc-container">
                  <div className="card-header">User Details</div>
                  <div className="card-body">
                    <form>
                      <div className="mb-3">
                        <label className="small mb-1" for="inputUsername">
                          Username
                        </label>
                        <input
                          className="form-control"
                          id="inputUsername"
                          type="text"
                          placeholder="Enter your username"
                          // value={input.username}
                          // onChange={(e) =>
                          //   setInput({ ...input, username: e.target.value })
                          // }
                        />
                      </div>

                      <div className="row gx-3 mb-3">
                        <div className="col-md-6">
                          <label className="small mb-1" for="inputFirstName">
                            First name
                          </label>
                          <input
                            className="form-control"
                            id="inputFirstName"
                            type="text"
                            placeholder="Enter your first name"
                            // value={input.name}
                            // onChange={(e) =>
                            //   setInput({ ...input, name: e.target.value })
                            // }
                          />
                        </div>

                        <div className="col-md-6">
                          <label className="small mb-1" for="inputLastName">
                            Last name
                          </label>
                          <input
                            className="form-control"
                            id="inputLastName"
                            type="text"
                            placeholder="Enter your last name"
                            // value={input.surname}
                            // onChange={(e) =>
                            //   setInput({ ...input, surname: e.target.value })
                            // }
                          />
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="small mb-1" for="inputEmailAddress">
                          Email address
                        </label>
                        <input
                          className="form-control"
                          id="inputEmailAddress"
                          type="email"
                          placeholder="Enter your email address"
                          // value={input.email}
                          // onChange={(e) =>
                          //   setInput({ ...input, email: e.target.value })
                          // }
                        />
                      </div>

                      <div className="row gx-3 mb-3">
                        <div className="col-md-6">
                          <label className="small mb-1" for="inputPhone">
                            Phone number
                          </label>
                          <input
                            className="form-control"
                            id="inputPhone"
                            type="tel"
                            placeholder="Enter your phone number"
                            // value={input.number}
                            // onChange={(e) =>
                            //   setInput({ ...input, number: e.target.value })
                            // }
                          />
                        </div>
                      </div>

                      <button
                        // onClick={handleSubmit}
                        className="btn btn-primary"
                        type="button"
                      >
                        Save changes
                      </button>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddUser