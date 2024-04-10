import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import "./auth.css"

const firebaseConfig = {
  apiKey: "AIzaSyCcfhd5ZQEc5R9rAPZWXORd0iBb_gllYz0",
  authDomain: "fabulous-7d9ab.firebaseapp.com",
  projectId: "fabulous-7d9ab",
  storageBucket: "fabulous-7d9ab.appspot.com",
  messagingSenderId: "354814341366",
  appId: "1:354814341366:web:9c05c30c1e78e62e37fcd7",
  measurementId: "G-CD13QDCFMF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Auth = () => {
  const [userData, setUserData] = useState(null);

  const handleLoginButtonClick = () => {
    const user = auth.currentUser;
    if (user) {
      auth.signOut()
        .then(() => {
          console.log("User signed out");
          localStorage.removeItem("user");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log("auth", user);
          localStorage.setItem("user", JSON.stringify(user));
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserData(user);
      } else {
        setUserData(null);
      }
    });
  }, []);

  return (
    <div className='authContainer'>
      {userData && <img className="user-icon" alt="avatar" width={"37px"} src={userData.photoURL} />}
      <button className="button" onClick={handleLoginButtonClick} id="login-button">
        {userData ? 'Logout' : 'Login with Google'}
      </button>
    </div>
  );
};

export default Auth;