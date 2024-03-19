import "./Loged.css"
import Navbar from "../Navbar/Navbar"

import { useSelector } from "react-redux"


export default function Loged() {
    
    const login = useSelector((state) => state.login.connection)

    return(
        <div className="Loged supraContainer">
            <Navbar/>

            <div className="container">
                {
                    login.flag ?
                        <h1>Welcome {login.user[0]}.</h1>
                    :
                        <h1>Please connect to your account see this page.</h1>
                }
            </div>
            
            
        </div>
    )
}