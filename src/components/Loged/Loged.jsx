import "./Loged.css"
import { useSelector } from "react-redux"


export default function Loged() {
    
    const login = useSelector((state) => state.login.connection)

    return(
        <div className="Loged supraContainer">
            {
                login.connected ?
                    <h1>Welcome {login.user[0]}</h1>
                :
                    <h1>Please connect to your account see this page.</h1>
            }
            
        </div>
    )
}