import { useState, useContext } from "react";
// import axios from "axios";
import authService from "../services/auth.service";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
 
// const API_URL = "http://localhost:5005";
 
 
function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const [successMessage, setSuccessMessage] = useState(undefined);

  const { storeToken, authenticateUser } = useContext(AuthContext);
  
  const navigate = useNavigate();
 
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
 
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const requestBody = { email, password };

    authService.login(requestBody)
        .then(response => {
            console.log('response data', response.data)
            storeToken(response.data.authToken)
            authenticateUser()// update my state variables
            // response.data.message --> "Login was successful"
            // setSuccessMessage(response.data.message)
            navigate("/")
        })
  };
  
  return (
    <div className="LoginPage">
      <h1>Login</h1>
 
      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
 
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
 
        <button type="submit">Login</button>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }
      {successMessage && <p>{successMessage}</p>}
      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  )
}
 
export default LoginPage;