import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  async function signup() {
    let items = { name, password, email };
    console.log(items);

    let result = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "GET",
      // body: JSON.stringify(items),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    });

    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("./Home.js");
  }

  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>SignUp page!</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        placeholder="Name"
      />
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
        placeholder="Password"
      />
      <br />
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        placeholder="Email"
      />
      <br />
      <button onClick={signup} className="btn btn-primary">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
