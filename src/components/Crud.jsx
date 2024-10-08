import React, { useState } from "react";
import Swal from "sweetalert2";
import Header from "./Header";

function Crud() {
  const initialFormData = {
    name: "",
    email: "",
    Address: "",
  };

  const [data, setData] = useState(initialFormData);
  const [entries, setEntries] = useState([]);

  const { name, email, Address } = data;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "name" && /^[a-zA-Z\s]*$/.test(value)) {
      setData({ ...data, [name]: value });
    } else if (name !== "name") {
      setData({ ...data, [name]: value });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || Address === "") {
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

    const isDuplicate = entries.some((entry) => entry.email === email);
    if (isDuplicate) {
      Swal.fire({
        position: "top-end",
        toast: true,
        icon: "error",
        showConfirmButton: false,
        title: "This email is already in the list",
        timer: 1500,
      });
      return;
    }

    setEntries([...entries, data]);
    resetForm();
  };

  const resetForm = () => {
    setData(initialFormData);
  };
  const handleEdit = (index) => {
    setData(entries[index]);
    setEntries(entries.filter((_, i) => i !== index));
  };

  const handleDelete = (index) => {
    setEntries(entries.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Header />
      <form onSubmit={submitHandler}>
        <h2 className="CRUD">CRUD FORM</h2>
        <input
          className="CRUD-1"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={changeHandler}
        />

        <br />
        <input
          className="CRUD-2"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={changeHandler}
        />
        <br />
        <input
          className="CRUD-3"
          type="text"
          name="Address"
          placeholder="Enter Address"
          value={Address}
          onChange={changeHandler}
        />
        <br />
        <button type="submit" className="btn-new">
          Submit
        </button>
      </form>
      {entries.length > 0 ? (
        <div>
          <h2 className="mrg-new">Data Table</h2>
          <table className="data-table">
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.Address}</td>
                  <td>
                    <button onClick={() => handleEdit(index)}>Edit</button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="centre">No data </p>
      )}
    </div>
  );
}

export default Crud;
