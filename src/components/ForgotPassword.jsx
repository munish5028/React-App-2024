import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Modal, Button } from "react-bootstrap";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState(""); // new state for new password
  const [confirmPassword, setConfirmPassword] = useState(""); // new state for confirm password
  const [showModal, setShowModal] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false); // new state for reset password modal

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (email === "") {
      Swal.fire({
        position: "top-end",
        toast: true,
        icon: "error",
        showConfirmButton: false,
        title: "Please enter your email",
        timer: 1500,
      });
      return;
    }
    axios
      .put("http://192.168.15.24:4000/forgotPassword", {
        email,
      })
      .then((response) => {
        if (response.data) {
          setShowModal(false);
          setShowOtpInput(true);
          Swal.fire({
            position: "top-end",
            toast: true,
            icon: "success",
            showConfirmButton: false,
            title: "OTP sent successfully",
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            toast: true,
            icon: "error",
            showConfirmButton: false,
            title: "Error sending OTP",
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          position: "top-end",
          toast: true,
          icon: "error",
          showConfirmButton: false,
          title: "Error sending OTP",
          timer: 1500,
        });
      });
  };

  const handleVerifyOtp = (e) => {
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
    } else {
      axios
        .put("http://192.168.15.24:4000/verifyOtp", {
          email,
          otp,
        })
        .then((response) => {
          if (response.data) {
            setShowOtpInput(false);
            setShowResetPassword(true); // show reset password modal
            Swal.fire({
              position: "top-end",
              toast: true,
              icon: "success",
              showConfirmButton: false,
              title: "OTP verified successfully",
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: "top-end",
              toast: true,
              icon: "error",
              showConfirmButton: false,
              title: "Invalid OTP",
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            position: "top-end",
            toast: true,
            icon: "error",
            showConfirmButton: false,
            title: "Error verifying OTP",
            timer: 1500,
          });
        });
    }
  };
  const handleResetPassword = (e) => {
    e.preventDefault();
    if (newPassword === "" || confirmPassword === "") {
      Swal.fire({
        position: "top-end",
        toast: true,
        icon: "error",
        showConfirmButton: false,
        title: "Please enter new password and confirm password",
        timer: 1500,
      });
      return;
    }
    if (newPassword !== confirmPassword) {
      Swal.fire({
        position: "top-end",
        toast: true,
        icon: "error",
        showConfirmButton: false,
        title: "New password and confirm password do not match",
        timer: 1500,
      });
      return;
    }
    axios
      .post("http://192.168.15.24:4000/resetPassword", {
        newPassword,
        confirmPassword,
      })
      .then((response) => {
        if (response.data) {
          setShowResetPassword(false);
          Swal.fire({
            position: "top-end",
            toast: true,
            icon: "success",
            showConfirmButton: false,
            title: "Password reset successfully",
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            toast: true,
            icon: "error",
            showConfirmButton: false,
            title: "Error resetting password",
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          position: "top-end",
          toast: true,
          icon: "error",
          showConfirmButton: false,
          title: "Error resetting password",
          timer: 1500,
        });
      });
  };

  return (
    <div>
      <Button className="btn-37" onClick={() => setShowModal(true)}>
        Forget User
      </Button>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter your email to receive OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button onClick={handleForgotPassword}>Send OTP</Button>
        </Modal.Body>
      </Modal>
      <Modal show={showOtpInput} onHide={() => setShowOtpInput(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter the OTP sent to your email</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            name="otp"
            placeholder="Enter the OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <Button onClick={handleVerifyOtp}>Verify OTP</Button>
        </Modal.Body>
      </Modal>
      <Modal
        show={showResetPassword}
        onHide={() => setShowResetPassword(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="password"
            name="newPassword"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button onClick={handleResetPassword}>Reset Password</Button>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ForgotPassword;
