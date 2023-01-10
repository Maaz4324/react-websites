import "./App.css";
import instaMobileApp from "./images/instamobile.png";
import logo from "./images/instaLogo.png";
import loginFB from "./images/loginFB.png";
import play from "./images/play.png";
import microsoft from "./images/microsoft.png";
import foot from "./images/foot.png";

function App() {
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
                    />
                    <label for="username" className="label_usname">
                      Phone number, username, or email
                    </label>
                  </div>
                  <div className="form_input">
                    <input type="password" placeholder="password" />
                    <label for="password" className="label_pswr">
                      Password
                    </label>
                  </div>
                </div>
                <button>Log in</button>
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
