import React from 'react'
import contact from "../assets/images/Online world.png";

function Items() {
  return (
    <div className="contact">
      <p>
        see my projects at Section 1 and i'll fell happy if you Get in touch
        with me
      </p>

      <div className="container">
        <img src={contact} alt="contact" />
        <div>
          <h3>Get in Touch</h3>
          <div className="form">
            <div className="inputs">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone" />
            </div>
            <textarea />
            <button>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Items;