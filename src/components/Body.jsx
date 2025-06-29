import React from "react";
import LoginPage from "./LoginPage";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "../utils/FireBase";
import { addUser, removeUser } from "../redux/appSlice";


const Body = () => {

  const dispatch = useDispatch();


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, password } = user;
        dispatch(addUser({ uid: uid, email: email, password: password }));
      
      } else {

        dispatch(removeUser())
      }
    });
  }, []);

  
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default Body;
