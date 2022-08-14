import { ContainerSignUp } from "../../styles/authentication/SignUp";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase";
import FormAuth from "./FormAuth";
import Button from "../button/Button";

const SignUp = () => {
  const [fillSignUp, setFillSignUp] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFillSignUp((prevFill) => ({ ...prevFill, [name]: value }));
    console.log(fillSignUp);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = fillSignUp;
    if (password !== confirmPassword) {
      return alert("Your Confirm Password does not match with passwords!");
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      setFillSignUp({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use!");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <ContainerSignUp>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <FormAuth
        label="Display Name"
        type="text"
        onChange={handleChange}
        name="displayName"
        value={fillSignUp.displayName}
      />

      <FormAuth
        label="Email"
        type="email"
        onChange={handleChange}
        name="email"
        value={fillSignUp.email}
      />

      <FormAuth
        label="Password"
        type="password"
        name="password"
        onChange={handleChange}
        value={fillSignUp.password}
      />

      <FormAuth
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        onChange={handleChange}
        value={fillSignUp.confirmPassword}
      />
      <Button onClick={handleClick}>Sign Up</Button>
    </ContainerSignUp>
  );
};

export default SignUp;
