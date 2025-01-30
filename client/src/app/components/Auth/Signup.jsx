import { useFormik } from 'formik';
import React, { useContext, useRef, useState } from 'react'
import * as styles from "./auth.module.css";
import { AuthContext } from '@/app/context/authContext';
export const Signup = ({ setMode }) => {
  const profileRef=useRef();
  const [profile,setProfile]=useState("");
  const {signup,dispatch}=useContext(AuthContext);
  const formik = useFormik({
    initialValues: { firstname: "", lastname: "", email: "", confirmPassword: "", password: "", age: "", phoneNo: "", profilePicture: "" },
    onSubmit: async(values, { resetForm }) => {
      let body={...values,profilePicture:profile}
      let res=await signup(body);
      dispatch({
        type:"SIGN_UP",
        payload:res
      })
      profileRef.current.value=null
      resetForm();
    }
  })
  return (
    <div className={`d-flex justify-content-center align-items-center ${styles.wrapper}`}>
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="firstname">First Name: &nbsp;&nbsp;</label>
        <input type="text"
          name='firstname'
          value={formik.values.firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        /> 
        <br />
        <br />
      <label htmlFor="lastname">Last Name: &nbsp;&nbsp;</label>
        <input type="text"
          name='lastname'
          value={formik.values.lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        /> 
        <br />
        <br />
      <label htmlFor="email">Email: &nbsp;&nbsp;</label>
        <input type="email"
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <br />
        <label htmlFor="password">Password: &nbsp;&nbsp;</label>
        <input type="password"
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        /> 
        <br />
        <br />
        <label htmlFor="confirmPassword">Confirm Password: &nbsp;&nbsp;</label>
        <input type="password"
          name='confirmPassword'
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <br />
        <label htmlFor="phoneNo">Phone No.: &nbsp;&nbsp;</label>
        <input type="text"
          name='phoneNo'
          value={formik.values.phoneNo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <br />
        <input 
        ref={profileRef}
        type="file"
         onChange={(e)=>{
           const image=e.target.files[0];
           const reader = new FileReader();
           reader.readAsDataURL(image);
           reader.addEventListener('load', (e) => {
               setProfile(e.target.result);
           })
        }} />
        <br />
        <br />
        <button className='btn btn-outline-success'>Sign up</button>&nbsp;
        <button className='btn btn-outline-success'
        onClick={()=>{
          setMode("signin")
        }}
        >Already Have An Account Log IN!</button>
      </form>
    </div>
  )
}
