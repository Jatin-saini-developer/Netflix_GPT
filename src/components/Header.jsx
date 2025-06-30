import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router";



const Header = ({ showSignOut = false }) => {

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
    <div className="flex justify-between">
      <div className="absolute h-[200px] w-[250px] z-50">
        <img
          className="w-[250px]"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix"
        />
      </div>

      {showSignOut && (
        <div className="absolute top-4 right-4 z-50">
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
