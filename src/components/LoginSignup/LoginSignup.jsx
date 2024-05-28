// import React, { useState } from "react";
// import "./LoginSignup.css";

// import user_icon from "../Assets/person.png";
// import email_icon from "../Assets/email.png";
// import password_icon from "../Assets/password.png";

// const LoginSignup = () => {
//   const [action, setAction] = useState("Login");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const handleEmailChange = (e) => {
//     const value = e.target.value;
//     setEmail(value);
//     setEmailError("");
//     if (value && !isValidEmail(value)) {
//       setEmailError("Invalid email format");
//     }
//   };

//   const handlePasswordChange = (e) => {
//     const value = e.target.value;
//     setPassword(value);
//     setPasswordError("");
//     if (value && value.length < 6) {
//       setPasswordError("Password must be at least 6 characters long");
//     }
//   };

//   const isValidEmail = (email) => {
//     return /\S+@\S+\.\S+/.test(email);
//   };

//   return (
//     <div className="container">
//       <div className="header">
//         <div className="text">{action}</div>
//         <div className="underline"></div>
//       </div>

//       <div className="inputs">
//         {action === "Login" ? null : (
//           <div className="input">
//             <img src={user_icon} alt="" />
//             <input type="text" placeholder="First Name" />
//           </div>
//         )}

//         <div className="input">
//           <img src={email_icon} alt="" />
//           <input
//             type="email"
//             placeholder="Email-Id"
//             value={email}
//             onChange={handleEmailChange}
//             className={emailError ? "error" : ""}
//           />
//           {emailError && <div className="error-message">{emailError}</div>}
//         </div>

//         <div className="input">
//           <img src={password_icon} alt="" />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={handlePasswordChange}
//             className={passwordError ? "error" : ""}
//           />
//           {passwordError && (
//             <div className="error-message">{passwordError}</div>
//           )}
//         </div>
//       </div>
//       {action === "Sign Up" ? null : (
//         <div className="forget-password">
//           Lost Password: <span>Click Here!</span>
//         </div>
//       )}
//       <div className="submit-container">
//         <div
//           className={action === "Login" ? "submit gray" : "submit"}
//           onClick={() => {
//             setAction("Sign Up");
//           }}
//         >
//           Sign Up
//         </div>
//         <div
//           className={action === "Sign Up" ? "submit gray" : "submit"}
//           onClick={() => {
//             setAction("Login");
//           }}
//         >
//           Log-In
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginSignup;

import React, { useState } from "react";
import "./LoginSignup.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError("");
    if (value && !isValidEmail(value)) {
      setEmailError("Invalid email format");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError("");
    if (value && value.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
    }
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value;
    setFirstName(value);
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value;
    setLastName(value);
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email-Id"
            value={email}
            onChange={handleEmailChange}
            className={emailError ? "error" : ""}
          />
          {emailError && <div className="error-message">{emailError}</div>}
        </div>

        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className={passwordError ? "error" : ""}
          />
          {passwordError && (
            <div className="error-message">{passwordError}</div>
          )}
        </div>
      </div>
      {action === "Sign Up" ? null : (
        <div className="forget-password">
          Lost Password: <span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Log-In
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
