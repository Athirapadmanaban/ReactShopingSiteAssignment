
import './login.css'
import React, { useState } from "react"
import loginUser from '../assets/Data/UserData.json'
import { useHistory } from 'react-router-dom'
function Login() {

    const [error, setError] = useState("");
    const [details, setDetails] = useState({ email: "", password: "" })
    let history = useHistory();
    const submitHandler = e => {
        e.preventDefault();
        Login(details)
    }

    const Login = details => {
        console.log(details)
        if (details.email === loginUser.email && details.password === loginUser.password) {
            console.log('logged in');
            console.log(loginUser.email)
            console.log(loginUser.password)
            history.push("/", { state: true })
            //    authData();

        } else {
            console.log('Invalid user ')
            setError('Invalid user')
            setDetails({ email: "", password: "" })
        }
    }
    //    let authData = ()=> {
    //        console.log('Authentication succeeded')
    //         var action = {
    //             type: 'UPDATE_LOGGEDIN',
    //             data: {
    //                 loggedin: true,

    //             }
    //         };
    //         store.dispatch(action)
    //     }
    return (

        <div className="shadow">


            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Login Here</h2>

                    <div className="errorMessage" style={{ color: 'red' }}>{error}</div>
                    <div className="form-group">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="LOGIN" />
                    </div>
                </div>
            </form>

        </div>

    )
}
export default Login