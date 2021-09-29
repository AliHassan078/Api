
import React,{useState} from "react";


const SignUp = () => {
    const[name,setName]= useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>SignUp page!</h1>
      <input type="text"  onChangeclassName="form-control" placeholder="name" />
      <br />
      <input type="text" className="form-control" placeholder="name" />
      <br />
      <input type="text" className="form-control" placeholder="name" />
      <br />
      <button>Sign Up</button>
    </div>
  );
};

export default SignUp;
