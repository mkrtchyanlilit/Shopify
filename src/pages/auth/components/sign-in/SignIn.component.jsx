import { useState } from "react";
import axios from "axios";
// BASE COMPONENTS
import Button from "src/components/button/Button.component";
import Input from "src/components/input/Input.component";

const SignIn = () => {
  const [inputState, setInputState] = useState({});

  const handleInput = (event) => {
    const { value, name } = event.target;
    setInputState({ ...inputState, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submit");
    const result = await axios.post("auth/login", inputState);

    console.log(result);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>I already have an account</h1>
      <p>Sign in with your email and password</p>
      <Input
        name="email"
        type="email"
        required
        label="Email"
        onChange={handleInput}
        value={inputState.email}
      />
      <Input
        name="password"
        type="password"
        required
        label="Password"
        value={inputState.password}
        onChange={handleInput}
      />
      <Button type="submit">Sign In</Button>
    </form>
  );
};

export default SignIn;
