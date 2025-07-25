import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { toogleGpt } from "../redux/GptSlice";



const Header = ({ showSignOut = false }) => {

  const dispatch = useDispatch();

  const handleShowGpt = ()=>{
    dispatch(toogleGpt());

  }

  const navigate = useNavigate()


  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        navigate('/error')
      });
  };

  return (
    <div className="absolute w-[100%] px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img
          className="w-44 mx-auto md:mx-0" 
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix"
        />
    

      {showSignOut && (
        <div className="absolute top-4 right-4 z-50">

          <button
           onClick={handleShowGpt}
           className="bg-violet-800 text-white px-4 py-2 rounded hover:bg-violet-700">
            GPT
           </button>




          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
