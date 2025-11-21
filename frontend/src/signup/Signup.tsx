import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigator = useNavigate();

  const signUp = async() => {
    if (password == confirmPassword) {
      console.log("kk");
      try {
        const response = await axios.post("http://localhost:3001/auth/signup", {
          username,
          password,
          email,
          confirmPassword,
        });
        if(response){
            console.log(response)
            navigator("/login");
        }
      } catch (error) {
        console.log(error);
      }
          //navigator("/login");

    }
  };
  return (
    <div className="main">
      <form className="form" onSubmit={(e)=>{e.preventDefault(); signUp() }}>
        <p className="heading">Sign up</p>

        <div className="cards">
          <div className="card" id="username">
            <label className="label">Username</label>
            <input
              className="inputBox"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="card" id="email">
            <label className="label">Email</label>
            <input
              className="inputBox"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="card" id="password">
            <label className="label">Password</label>
            <input
              className="inputBox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="card" id="confirmPassword">
            <label className="label">Confirm Password</label>
            <input
              className="inputBox"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <button className="button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default SignUp;
