import React from 'react'
import img from '/imgs/avataaars.svg'

const Home = () => {
  return (
    <div className='Home  py-2 '>
       <div className="conyainer py-2">
         <div className='pt-1 pb-5'>
            <img className='w-25' src={img} alt="" />
        </div>
        <h1>START FRAMEWORK</h1>
          <div className="star">
                <i class="fa-solid fa-star fs-4 fw-bolder "></i>
            </div>
        <p className='mb-0 mt-3'>Graphic Artist - Web Designer - Illustrator</p>
       </div>
    </div>
  )
}

export default Home