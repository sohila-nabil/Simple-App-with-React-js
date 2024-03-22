import React from 'react'
import contact from "../assets/images/Online world.png"

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <img src={contact} alt="contact" />
        <div>
          <h3>Get in Touch</h3>
          <div className="form">
            <div className='inputs'>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone" />
            </div>
            <textarea/>
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
