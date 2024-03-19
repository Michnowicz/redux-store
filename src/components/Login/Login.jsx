import "./Login.css"
import Navbar from "../Navbar/Navbar"

import { useSelector, useDispatch } from 'react-redux'
import { addMail, addPassword, handleConnection } from "../../app/features/loginSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"




export default function Login() {
    
    const login = useSelector((state) => state.login.connection)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // useEffect(()=>{
    //     console.log(`
    //     mail: ${login.mail} \n
    //     password: ${login.password} \n
    //     connected: ${login.flag} \n`);
    // },[login])

    const handleNav = () => {
        dispatch(handleConnection())
        if (login.flag == true) {
            navigate("/loged")
        }
    }

    return(
        <div className="Login supraContainer">
            <Navbar/>
            <div className="container">
                <h1>Log in</h1>

                <div>
                    <input className="connectionInput" type="mail" placeholder="email" onChange={(e)=>(dispatch(addMail(e.target.value)))}/>
                    <input className="connectionInput" type="password" placeholder="password" onChange={(e)=>(dispatch(addPassword(e.target.value)))}/>
                </div>

                <div>
                    <button onClick={handleNav}>LOGIN</button>
                </div>
            </div>
        </div>
    )
}