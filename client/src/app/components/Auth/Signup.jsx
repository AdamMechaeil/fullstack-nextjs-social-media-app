import { useFormik } from 'formik';
import React from 'react'

export const Signup = ({ setMode }) => {
  const formik = useFormik({
    initialValues: { firstname: "", lastname: "", email: "", confirmPassword: "", password: "", age: "", phoneNo: "", profilePicture: "" },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <input type="text"
          name='firstname'
          value={formik.values.firstname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        /> <input type="text"
          name='lastname'
          value={formik.values.lastname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        /> <input type="email"
          name='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        /> <input type="password"
          name='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        /> <input type="password"
          name='confirmPassword'
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <input type="text"
          name='phoneNo'
          value={formik.values.phoneNo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </form>
    </div>
  )
}
