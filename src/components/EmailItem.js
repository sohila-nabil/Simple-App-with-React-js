import React from 'react'

function EmailItem() {
  return (
    <div className='email-item'>
          <div className='container'>
              <div>
                  <p>Feel Free to Contact me Through Email</p>
              </div>
              <div className='form'>
                  <input type='email' placeholder='Enter Your Email' />
                  <button>Submit</button>
              </div>
      </div>
    </div>
  )
}
export default EmailItem;
