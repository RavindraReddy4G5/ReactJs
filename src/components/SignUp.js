import React from "react";
import { Formik,Form } from "formik";
import Validate from "./Validate";
import * as Yup from 'yup';
const SignUp = () => {
    const validate=Yup.object({
        firstName:Yup.string().max(15,'Must be 15 characters or less than u can enter').required('required'),
        lastName:Yup.string().max(10,'must be enter less than 10 charcters').required('required'),
        emailId:Yup.string().email('enter valid email ').required('mandatory'),
        password:Yup.string().min(8, 'enter same password which you enter in the above').required('confirm passsword is required'),
        confirmPassword:Yup.string().oneOf([Yup.ref('password'),null],'at least 8 charecter should maintain').required('required')
       
    })
    return ( 
       <Formik 
       initialValues={{
           firstName:'',
           lastName:'',
           emailId:'',
           password:'',
           confirmPassword:''
       }}
       validationSchema={validate}
       >
           {formik=>(
               <div>
                   <h1 className="my-4 font-weight-bold-display-4">SignUp</h1>
                   {console.log(formik.values)}
                   <Form>
                        <Validate label="first Name" name="firstname" type="text" />
                        <Validate label="last Name" name="lastname" type="text" />
                        <Validate label="email " name="email" type="email" />
                        <Validate label="password" name="passsword" type="password" />
                        <Validate label="confirm Password" name="confirmPassword" type="text" />
                        <button className="btn btn-dark mt-3" type="submit" >Register</button> 
                        <button className="btn btn-danger mt-3" type="submit" >Reset</button>
                      </Form>
               </div>
           )}
       </Formik>
     );
}
 
export default SignUp;