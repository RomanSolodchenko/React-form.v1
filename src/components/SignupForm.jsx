import React from 'react';

const Signupform = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Registration</h2>
        </div>
<form action="" className="form-wrapper">
    <div className="name">
        <label htmlFor="" className="label">Name</label>
        <input type="text" className="input" />
    </div>

    <div className="email">
        <label htmlFor="" className="label">Email</label>
        <input type="email" className="input" />
    </div>

    <div className="password">
        <label htmlFor="" className="label">Password</label>
        <input type="password" className="input" />
    </div>

</form>

      </div>
    </div>
  );
};

export default Signupform;
