import React, { useState } from "react";
import PostData from "./Post";
import Header from "./Header";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: ""
  });

  const submitHandler = (e) => {
    e.preventDefault();

    // if (data.name === "") {
    //   alert("Please fill in your name");
    // } else if (data.email === "") {
    //   alert("Please enter your email");
    // } else if (data.subject === "") {
    //   alert("Please enter a subject");
    // }
    
    if (!data.name || !data.email || !data.subject){
      alert(" !Error fields are empty ")
    }

    // if (!data.name || !data.email || !data.subject) {
    //   alert(`${!data.name ? 'Enter your name\n' : ''}${!data.email ? 'Enter your email\n' : ''}${!data.subject ? 'Enter your subject' : ''}`);
    // }
    else {

      console.log("Form submitted successfully!");
      console.log("Submitted data:", data);

      setData({
        name: "",
        email: "",
        subject: ""
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
    <Header />
      {/* <Header />
      <PostData /> */}
      <div className="Container">
        <form onSubmit={submitHandler}>
          <h2 className="mrg-91">Contact us form</h2>
          <input
            className="mrg-111"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={data.name}
            onChange={handleInputChange}
          />
          <br />
          <input
            className="mrg-111"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={data.email}
            onChange={handleInputChange}
          />
          <br />
          <input
            className="mrg-111"
            type="text"
            name="subject"
            placeholder="Enter a subject"
            value={data.subject}
            onChange={handleInputChange}
          />
          <br />
          <button type="submit" id="Right">Submit</button>
        </form>
      </div>
    </>
  );
}