import React from 'react'
import './Inputs.css'

function Inputs({ type, placeholder }) {
    return (
      <div className="container-inputs">
        <input
          className="style-input"
          placeholder={placeholder}
          type={type ? type : "email"}
          required
        />
        <div className="status"></div>
      </div>
    );
}

export default Inputs;
