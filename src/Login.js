import React, {useState} from 'react';
import axios from 'axios';

function Login() {
    
    const [data, setDate] = useState({
        userName : '',
        password : '',
    });

    const {userName, password} = data;

    const changeHandler = e => {
        setDate({...data, [e.target.name]: e.target.value});
        console.log("Subbu", data);
    }
    const submitHandler = e => {
        e.preventDefault();
        axios.post('https://api.stage.helixsense.com/api/v4/authentication/oauth2/', data).then(() => alert("Success"));
        console.log(data);
    }
    // const formData = JSON.stringify(data);

    return (
        <div>
            <div className="p-3 my-4">
                <div className="row">
                    <div className="col-md-4 m-auto bg-light p-3">
                        <h3 className="text-center">Login Form</h3>
                        <form onSubmit={submitHandler} className="p-2">
                            <div className="form-group my-3">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="text" className="form-control" name="userName" onChange={changeHandler} value={userName} placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group my-3">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" onChange={changeHandler} value={password} name="password" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
