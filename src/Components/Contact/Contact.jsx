import React from 'react'


const Contact = () => {
  return (<>
  <div className='Contact p-5 '>
    <h1 className=' fw-bolder'>CONTACT SECTION</h1>
      <div className="star">
                <i class="fa-solid fa-star fs-4 fw-bolder "></i>
            </div>
    <div className="form   ">
     <div>
  <div className="mb-3">
    <input type="text" className="w-50 input" id="formGroupExampleInput" placeholder="UserName" />
  </div>
  <div className="mb-3">
    <input type="number" className="w-50 input" id="formGroupExampleInput2" placeholder="UserAge" />
  </div>
  <div className="mb-3">
    <input type="email" className="w-50 input" id="formGroupExampleInput2" placeholder="UserEmail" />
  </div>
  <div className="mb-3">
    <input type="password" className="w-50 input" id="formGroupExampleInput2" placeholder="UserPassword" />
  </div>
  <div className=' d-flex justify-content-start mt-3'>
  <button id='btnId' className='btn  text-white'>send Message</button>
</div>
</div>
    </div>
  </div>
  </>
  )
}

export default Contact