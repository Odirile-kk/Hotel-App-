import React from 'react'
import pic from '../assets/pic-2.png'

const Gallery = () => {
  return (

    <div className='gallery-container'>
       <div className='gallery'>
 
 <div>
  <img src={pic} alt="food" width={250} height={250}/>
 </div>
 <div><img src={pic} alt="food" width={250} height={250} /></div>
 <div><img src={pic} alt="food" width={250} height={250}/></div>
 <div><img src={pic} alt="food" width={250} height={250}/></div>
 <div><img src={pic} alt="food" width={250} height={250}/></div>
 <div><img src={pic} alt="food" width={250} height={250}/></div>
 <div><img src={pic} alt="food" width={250} height={250}/></div>
 <div><img src={pic} alt="food" width={250} height={250}/></div>
 <div><img src={pic} alt="food" width={250} height={250}/></div>
 <div><img src={pic} alt="food" width={250} height={250}/></div>

 
    </div>
    </div>
   
  )
}

export default Gallery