import '../assets/css/SignupPage.css'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

class SignupPage extends React.Component {

    render() {

      return (

        <div>
            <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                <Field type="email" name="email" placeholder="email" className='mx-2 my-2' />
                <ErrorMessage name="email" component="div" />
                <Field type="password" name="password"  placeholder="password" className='mx-2 my-2'/>
                <ErrorMessage name="password" component="div" />
                <Field as="select" name="nationality" className='mx-2 my-2'>
                    <option value="en">English</option>
                    <option value="de">German</option>
                    <option value="fr">French</option>
                </Field>
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                </Form>
            )}
            </Formik>
   </div>
      )
    }
  }

  export default SignupPage