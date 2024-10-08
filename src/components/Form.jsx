import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

import Sidebar from "./Sidebar";

function MyForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      male: false,
      female: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters'),
      email: Yup.string()
        .required('Email is required')
        .email('Invalid email address'),
      password: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters'),
    }),
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      Swal.fire({
        title: 'Success!',
        text: 'Form submitted successfully!',
        icon: 'success',
        confirmButtonText: 'OK',
      });
      console.log(values);
    },
  });

  return (
    <div>
      <Sidebar />
      <h2>React Form</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="container">
          <input
            className="Email"
            type="text"
            name="name"
            placeholder="Enter your Name"
            value={formik.values.name || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />{" "}
          {formik.touched.name && formik.errors.name ? (
            <div style={{ color: 'red' }}>{formik.errors.name}</div>
          ) : null}
          <br />
          <input
            className="Email"
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formik.values.email || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />{" "}
          {formik.touched.email && formik.errors.email ? (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          ) : null}
          <br />
          <input
            className="Passcode"
            type="password"
            name="password"
            placeholder="Enter 8 digit passcode"
            value={formik.values.password || ""}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />{" "}
          {formik.touched.password && formik.errors.password ? (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          ) : null}
          <br />
          <div className="box">
            <input
              type="checkbox"
              name="male"
              checked={formik.values.male}
              onChange={formik.handleChange}
            />{" "}
            Male
            <input
              type="checkbox"
              name="female"
              checked={formik.values.female}
              onChange={formik.handleChange}
            />{" "}
            Female
          </div>
          <br />
          <button className="btn-submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default MyForm;