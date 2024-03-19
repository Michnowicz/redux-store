import "./Login.css"

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

    useEffect(()=>{
        if (login.flag == true) {
            navigate("/loged")
        }
    },[login.flag])

    return(
        <div className="Login supraContainer">
            <div>
                <h1>Log in</h1>

                <div>
                    <input className="connectionInput" type="mail" placeholder="email" onChange={(e)=>(dispatch(addMail(e.target.value)))}/>
                    <input className="connectionInput" type="password" placeholder="password" onChange={(e)=>(dispatch(addPassword(e.target.value)))}/>
                </div>

                <div>
                    <button onClick={()=>(dispatch(handleConnection()))}>LOGIN</button>
                </div>
            </div>
        </div>
    )
}