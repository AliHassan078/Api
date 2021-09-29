import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function signup(){
    let items={name,password,email}
    console.log(items)
  }
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>SignUp page!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        placeholder="name"
      />
      <br />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="name"
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="name"
      />
      <br />
      <button  onClick={signup}className="btn btn-primary d-flex justify-content-center" >Sign Up</button>
    </div>
  );
};

export default SignUp;
