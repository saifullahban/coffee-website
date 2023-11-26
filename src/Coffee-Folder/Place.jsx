import React from 'react';
import './Comfy-place.css'

function Place() {
  return (
    <div>
       <div className="container py-5">
        <h2 className='mt-5 underline'>Make you feel good with <br />our comfy fasilities</h2>
        <di className="row">
       <div className="col-md-6 mt-5">
          <div className="card border-0">
             <img src="coffee-pic/place1.jpg" className='rounded' alt="" />

          </div>
       </div>

       <div className="col-md-6 ">
           <div className='text-center mt-5 comfy-place'>
             <h1>Find a place you love</h1>
             <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit <br /> Molestias possimus inventore necessitatibus aperiamss!</p>
           </div>
       </div>
        </di>
       </div>
    </div>
  );
}

export default Place;
