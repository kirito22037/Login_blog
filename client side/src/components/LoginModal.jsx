import React from 'react';
import { useFormik } from 'formik'
import axios from 'axios';
import { validate } from '../Utils/LoginFormValidation';
 
const LoginReq = (values) => {
  axios.post('http://localhost:5000/user', {
    email : values.email,
    password : values.password
  }).then( res=>{
    alert(JSON.stringify(res.data, null, 2));
  })
  .catch(err=>{
    alert("error during login");
  });
}


const Login = () => {

    const formik = useFormik({
        initialValues: {
            email : '',
            password : ''
        },
        validate,
        onSubmit : values => {
            LoginReq(values);
            //alert(JSON.stringify(values, null, 2));
        }
    });

    return <div className="modal fade" id="LoginModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <form 
    className="modal-dialog" 
    onSubmit={ formik.handleSubmit }>
      
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Login </h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div className="modal-body">
        <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                id="email"
                name="email" 
                aria-describedby="emailHelp"
                placeholder="email"
                onChange={ formik.handleChange }
                onBlur={ formik.handleBlur }
                value={ formik.values.email }/>   
                {
                    formik.touched.email && formik.errors.email ? 
                    (<small style={ {'color' : 'red'} }>{ formik.errors.email }</small>) : null
                }
            </div>


            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="password"
                name='password'
                placeholder="password"
                onChange={ formik.handleChange }
                onBlur={ formik.handleBlur }
                value={ formik.values.password }
                />
                {
                    formik.touched.password && formik.errors.password ? 
                    (<small style={ {'color' : 'red'} }>{ formik.errors.password }</small>) : null
                }
            </div>
        </div>

        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="submit" className="btn btn-primary">Login</button>
        </div>

      </div>
    </form>
  </div>
};

export default Login;