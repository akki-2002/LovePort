import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../components/css/signup.css";
import emailImg from "../components/Images/email.png";
import lock from "../components/Images/lock.png";
import show from "../components/Images/show.png";
import hide from "../components/Images/hide.png";

function Signup() {
  const [move, setMove] = useState();
  const [move2, setMove2] = useState();

  const [name, setName] = useState(""); // State for name
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameClick = () => {
    setMove({
      top: "-15px",
    });

    if (!email) {
      setMove2({
        top: "13px",
      });
    }
    setIsVisible(false);
    setPassInput("password");
  };

  const handleEmailClick = () => {
    setMove({
      top: "-15px",
    });

    if (!password) {
      setMove2({
        top: "13px",
      });
    }
    setIsVisible(false);
    setPassInput("password");
  };

  const handlePasswordClick = () => {
    setMove2({
      top: "-15px",
    });

    if (!email) {
      setMove({
        top: "13px",
      });
    }
  };

  const [isVisible, setIsVisible] = useState(false);
  const [passInput, setPassInput] = useState("password");

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
    setPassInput(isVisible ? "password" : "text");
  };

  return (
    <>
      <div className="signupMain">
        <div className="signup">
          <div className="signupHeading">Create Account</div>
          <form action="">
            {/* Name input field */}
            <div className="signupContent" onClick={handleNameClick}>
              <label htmlFor="" style={move}>
                {" "}
                <img src={emailImg} alt="email" />{" "}
                <p>
                  Name <span>*</span>
                </p>
              </label>
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            {/* Email input field */}
            <div className="signupContent" onClick={handleEmailClick}>
              <label htmlFor="" style={move}>
                {" "}
                <img src={emailImg} alt="email" />{" "}
                <p>
                  Email Address <span>*</span>
                </p>
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            {/* Password input field */}
            <div className="signupContent1" onClick={handlePasswordClick}>
              <label htmlFor="" style={move2}>
                {" "}
                <img src={lock} alt="lock" />{" "}
                <p>
                  Password <span>*</span>
                </p>
              </label>
              <div className="ip">
                <input
                  type={passInput}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <div className="eye">
                  <img
                    src={isVisible ? show : hide}
                    alt=""
                    onClick={toggleVisibility}
                  />
                </div>
              </div>
            </div>

            <div className="signupBtns">
              <div className="signupBtn">
                <button>REGISTER</button>
              </div>

              <p>OR</p>

              <div className="loginBtn">
                <Link to={'/signin'} style={{ textDecoration: 'none',  cursor: 'pointer' }}><button>LOG IN</button></Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
