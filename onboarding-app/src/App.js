import React from 'react';
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import './App.css';

const App = (props) => {
  const flexColumn= {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    alignItems: 'center'
  }

  const errorStyle = {
    fontSize: '0.5rem',
    color: 'red'
  }

  console.log(props)

  return (
    <Form style={flexColumn}>
      <label htmlFor="name">Name:</label>
      <Field type="text" name="name"/>
      {props.errors.name && props.touched.name && (<p style={errorStyle}>{props.errors.name}</p>)}

      <label htmlFor="email">Email:</label>
      <Field type="text" name="email"/>
      {props.errors.email && props.touched.email && (<p style={errorStyle}>{props.errors.email}</p>)}

      <label htmlFor="password">Password:</label>
      <Field type="password" name="password"/>
      {props.errors.password && props.touched.password && (<p style={errorStyle}>{props.errors.password}</p>)}

      <label htmlFor="termsOfService">Terms of Services:</label>
      <Field type="checkbox" name="termsOfService" checked={values.termsOfService}/>
      {props.errors.termsOfService && props.touched.termsOfService && (<p style={errorStyle}>{props.errors.termsOfService}</p>)}

      <button type="submit">Submit</button>
    </Form>
  );
}

const FormikApp = withFormik({
  mapPropsToValues(props){
    return {
      name: props.name || '',
      email: props.email || '',
      password: props.password || '',
      termsOfService: props.termsOfService || ''
    }
  },
  validationSchema: Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required("Required"),
    email: Yup.string()
      .max(20, "Email must be 20 characters or less")
      .required("Required"),
    password: Yup.string()
      .max(15, "password must be 15 characters or less")
      .required("Required"),
    termsOfService: Yup.bool()
      .required("Required")
  }),
  handleSubmit(values, formikBag){
    console.log("submitting!", values);
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        console.log('success', res)
      })
      .catch(err => console.log(err))
    // resetForm()
  }
})(App)

export default FormikApp;
