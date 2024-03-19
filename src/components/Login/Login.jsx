import "./Login.css"

import { useSelector, useDispatch } from 'react-redux'





export default function Login() {
    
    const login = useSelector((state) => state.login.connection)
    const dispatch = useDispatch()

    return(
        <div className="Login supraContainer">
            <div>
                <h1>Log in</h1>

                <div>
                    <input className="connectionInput" type="mail" placeholder="email"/>
                    <input className="connectionInput" type="password" placeholder="password"/>
                </div>

                <div>
                    <button>LOGIN</button>
                </div>
            </div>
        </div>
    )
}