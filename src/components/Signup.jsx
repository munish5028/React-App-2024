import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Swal from "sweetalert2";
import axios from "axios";
import Header from "./Header";
// import Header from "./Header";

function App() {
  const initialFormData = {
    name: "",
    email: "",
    password: "",
  };

  const [data, setData] = useState(initialFormData);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);

  const { name, email, password } = data;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "name" && /^[a-zA-Z]+$/.test(value)) {
      console.log("Character code:", value.charCodeAt(0));
    }
    setData({ ...data, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === "") {
      Swal.fire({
        position: "top-end",
        toast: true,
        icon: "error",
        showConfirmButton: false,
        title: "All fields are required",
        timer: 1500,
      });
      return;
    }
    if (email === "") {
      Swal.fire({
        position: "top-end",
        toast: true,
        icon: "error",
        showConfirmButton: false,
        title: "Email is required",
        timer: 1500,
      });
      return;
    }
    if (password === "") {
      Swal.fire({
        position: "top-end",
        toast: true,
        icon: "error",
        showConfirmButton: false,
        title: "Passcode is required",
        timer: 1500,
      });
      return;
    }

    // Simple email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Swal.fire({
        position: "top-end",
        toast: true,
        icon: "error",
        showConfirmButton: false,
        title: "Invalid email address",
        timer: 1500,
      });
      return;
    }

    // Make a POST request to your backend API to signup the user
    axios
      .post("http://192.168.15.24:4000/signup", data)
      .then((response) => {
        console.log("Signup successful:", response.data);
        setOtpSent(true);
        setShowOtpModal(true);
        Swal.fire({
          position: "top-end",
          toast: true,
          icon: "success",
          showConfirmButton: false,
          title: "Signup successful. Please verify your email",
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error signing up:", error);
        Swal.fire({
          position: "top-end",
          toast: true,
          icon: "error",
          showConfirmButton: false,
          title: "Error signing up",
          timer: 1500,
        });
      });
  };

  const [otp, setOtp] = useState("");
  const [otpEmail, setOtpEmail] = useState("");

  const verifyOtpHandler = (e) => {
    e.preventDefault();

    if (otp === "") {
      Swal.fire({
        position: "top-end",
        toast: true,
        icon: "error",
        showConfirmButton: false,
        title: "Please enter the OTP",
        timer: 1500,
      });
      return;
    }

    axios
      .put("http://192.168.15.24:4000/verifyOtp", { email: otpEmail, otp })
      .then((response) => {
        console.log("OTP verified:", response.data);
        setOtpVerified(true);
        setShowOtpModal(false);
        Swal.fire({
          position: "top-end",
          toast: true,
          icon: "success",
          showConfirmButton: false,
          title: "Email verified successfully",
          timer: 1500,
        });
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
        Swal.fire({
          position: "top-end",
          toast: true,
          icon: "error",
          showConfirmButton: false,
          title: "Error verifying OTP",
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <Header/>
      <form onSubmit={submitHandler}>
        <h2 className="mrg-91">SignUp Form</h2>
        <input
          className="mrg-111"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={changeHandler}
        />

        <input
          className="mrg-33"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={changeHandler}
        />

        <br />

        <input
          className="passcode-111"
          type="password"
          name="password"
          placeholder="Enter your passcode"
          value={password}
          onChange={changeHandler}
        />

        <br />

        <button type="submit" className="btn-29">
          Submit
        </button>
      </form>

      {showOtpModal && (
        <div className="otp-modal">
          <h2>OTP Verification</h2>

          <form onSubmit={verifyOtpHandler}>
            <input
              type="email"
              name="otpEmail"
              placeholder="Enter your email"
              value={otpEmail}
              onChange={(e) => setOtpEmail(e.target.value)}
            />

            <input
              type="text"
              name="otp"
              placeholder="Enter the OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button type="submit">Verify OTP</button>
          </form>
        </div>
      )}

      {otpVerified && (
        <div>
          <h2>Email verified successfully!</h2>
        </div>
      )}
    </div>
  );
}

export default App;
