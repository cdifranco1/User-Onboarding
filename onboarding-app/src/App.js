import React from 'react';
import { withFormik, Form, Field } from "formik";
import logo from './logo.svg';
import './App.css';

const App = (props) => {
  const flexColumn= {
    display: 'flex',
    flexDirection: 'column',
  }

  

  return (
    <Form style={flexColumn}>
      <label htmlFor="name">Name:</label>
      <Field type="text" name="name"/>

      <label htmlFor="email">Email:</label>
      <Field type="text" name="email"/>

      <label htmlFor="password">Password:</label>
      <Field type="text" name="password"/>

      <label htmlFor="termsOfService">Terms of Services:</label>
      <Field as="checkbox" name="termsOfService"/>

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
  }
})(App)

export default FormikApp;
