import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/FormValidate";
import { auth } from "../utils/FireBase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = () => {
  const [isSignIn, setisSignIn] = useState(true);

  const [errorMessage, seterrorMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = () => {
    const message = validateForm(email.current.value, password.current.value);
    seterrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          seterrorMessage(errorCode + errorMessage);
        });
    } else {
      
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
           
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + errorMessage);

        });
    }
  };

  const handleToggle = () => {
    setisSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/75b0ed49-75ab-4a63-bd45-37bc2c95cb73/web/IN-en-20250623-TRIFECTA-perspective_ae5833b7-6ce5-4e88-853e-014f38c506f1_large.jpg"
          alt="bg-img"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="h-auto my-10  bg-black/75 flex flex-col w-1/3 absolute mx-auto right-0 left-0 "
      >
        <h1 className="p-4 text-white text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            className="p-3 m-4 bg-white"
            type="text"
            placeholder="Enter Your Name..."
          />
        )}

        <input
          ref={email}
          className="p-3 m-4 bg-white"
          type="email"
          placeholder="Enter Email"
        />

        <input
          ref={password}
          className="p-3 m-4 bg-white"
          type="password"
          placeholder="Password"
        />

        <button onClick={handleSignIn} className="bg-red-700 p-4 m-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-4 text-xl text-red-700">{errorMessage}</p>

        <p className="p-4 text-white cursor-pointer" onClick={handleToggle}>
          New to Netflix?Sign up now.
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
