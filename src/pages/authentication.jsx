import { ContainerAuthentication } from "../styles/authentication/authentication";
import SignIn from "../components/authentication/SignIn";
import SignUp from "../components/authentication/SignUp";
import Navbar from "../components/general/Navbar";

const Authentication = () => {
  return (
    <>
      <Navbar />
      <ContainerAuthentication>
        <SignIn />
        <SignUp />
      </ContainerAuthentication>
    </>
  );
};

export default Authentication;
