import { useFormik } from 'formik'
import React from 'react'
import * as styles from "./auth.module.css";
export const Login = ({ setMode }) => {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  })
  return (
    <div className={`d-flex justify-content-center align-items-center ${styles.wrapper}`}>
      <div className="my-3 p-3">
        <label htmlFor="email">Email &nbsp;&nbsp;</label>
        <form onSubmit={formik.handleSubmit}>
          <input
            type="email"
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
          <br />
          <br />
          <label htmlFor="password">Password &nbsp;&nbsp;</label>
          <br />
          <br />
          <input
            type="password"
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur} />
            <br />
            <br />
            <button className='btn btn-success'>Login</button>
        </form>
        <br />
        <br />
        <br />
        <button className='btn btn-primary' onClick={()=>{
          setMode("signup")
        }}>Dont have an account? Create One!</button>
      </div>
    </div>
  )
}
