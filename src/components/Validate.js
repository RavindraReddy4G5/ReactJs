import React from "react";
import {ErrorMessage, useField } from "formik";
const Validate = ({label,...props}) => {
    const [field,meta]=useField(props);
    return ( 
        <div className="mb-2">
            <label htmlFor={field.name}/>{label}
            <input className={`form-control shadow-none ${meta.touched && meta.error && `is-invalid`}`} autoComplete="off" {...field}{...props} />
            <ErrorMessage name={field.name}/>
            </div>
     );
}
 
export default Validate;