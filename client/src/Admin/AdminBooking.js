import React from 'react'
import Sidebar from './Sidebar'

const AdminBooking = () => {
  return (
    <div class="d-flex" id="wrapper">
        <div>
            <Sidebar/>
        </div>

        <div id="page-content-wrapper" style={{}}>
   

   <div class="container-fluid px-4" style={{ marginTop: '13%'}}>
   

       <div class="row my-5">
           <h3 class="fs-4 mb-3">Bookings</h3>
           <div class="col"  style={{boxShadow: "2px 2px 10px 0 rgba(22, 22, 26, 0.22)"}}>
               <table class="table bg-white rounded shadow-sm  table-hover">
                   <thead>
                       <tr>
                       
                           <th scope="col" width="50">#</th>
                           <th scope="col">Name</th>
                           <th scope="col">Price</th>
                           <th scope="col">Description</th>
                       </tr>
                   </thead>
                   <tbody>

                   {/* {rooms.map((room) => ( */}
                    <tr>
                           <th scope="row">3</th>
                           <td>jhgdc</td>
                           <td>wertyuikjm</td>
                           <td>qsx</td>
                       </tr>
{/* ))} */}
                      
                     
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