import React, { useEffect } from "react";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  // When user somes back from another tab to app..the sign in page will re render and mount again
  // >auth< is helping us keep the track of all the authentication state for website and firebase ; regardless of here we go
  //hence we need the auth details (during redirect) when mounted

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>with Google</button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;
