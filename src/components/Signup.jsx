import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      setErrorMessage(null);

      if (!email || !password || !username) {
        alert("missing parameters");
        return setErrorMessage("missing parameters");
      }

      if (password.length <= 4) {
        return setErrorMessage("please enter a valid password");
      }

      //

      const result = await axios.post(
        "https://site--soutien-06--fhx5w78hhgzd.code.run/api/user/signup",
        {
          username,
          email,
          password,
        }
      );

      console.log(result.data);
    } catch (error) {
      // console.log(error.response.data.error);
      // console.log(error.status);
      if (error.status === 409) {
        setErrorMessage(error.response.data.error);
      }
      console.log(error);
    }
  };

  const handleInputChange = (name, event) => {
    const value = event.target.value;
    if (name === "user") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => {
              handleInputChange("user", e);
            }}
          />
        </label>
        <br />
        <label>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => {
              handleInputChange("email", e);
            }}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => {
              handleInputChange("password", e);
            }}
          />
        </label>
        <br />
        <button>créer mon profil</button>
      </form>
    </div>
  );
};

export default Signup;
