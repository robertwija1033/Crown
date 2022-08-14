import {
  ContainerSignIn,
  SignInButton,
} from "../../styles/authentication/SignIn";
import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase";
import Button, { BUTTON_TYPE_CLASSES } from "../button/Button";
import FormAuth from "./FormAuth";

const SignIn = () => {
  const [fillSignIn, setFillSignIn] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFillSignIn((prevFill) => ({ ...prevFill, [name]: value }));
  };

  const handleClick = async (e) => {
    const { email, password } = fillSignIn;

    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      setFillSignIn({ email: "", password: "" });
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email!");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email!");
          break;

        default:
          console.log(error);
      }
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <ContainerSignIn>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <FormAuth
        label="Email"
        type="email"
        onChange={handleChange}
        name="email"
        value={fillSignIn.email}
      />

      <FormAuth
        label="Password"
        type="password"
        name="password"
        onChange={handleChange}
        value={fillSignIn.password}
      />
      <SignInButton>
        <Button onClick={handleClick}>Sign In</Button>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.google}
          onClick={signInWithGoogle}
        >
          Google sign in
        </Button>
      </SignInButton>
    </ContainerSignIn>
  );
};

export default SignIn;
