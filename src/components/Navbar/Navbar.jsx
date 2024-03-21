import { useNavigate } from "react-router-dom"
import "./Navbar.css"
import { useSelector, useDispatch } from "react-redux"
import { handleLocation, handleDisconnect } from "../../app/features/loginSlice"
import { useEffect, useState } from "react"
import logo from "../../assets/logo.png"

export default function Navbar() {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const flag = useSelector((state) => state.login.connection.flag)

    const [shown, setShown] = useState(false)


    const handleNav = (e) => {
        navigate(`/${e.target.id}`)
        setShown(!shown)
    }

    return(
        <div className="Navbar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className="linkDiv">
                {/* <div className="links">
                    <div id='products' onClick={handleNav}>PRODUCTS</div>
                    <div id='guitar' onClick={handleNav}>GUITAR</div>
                    <div id='string' onClick={handleNav}>STRING</div>
                    <div id='pedal' onClick={handleNav}>PEDAL</div>
                    <div id='amp' onClick={handleNav}>AMP</div>
                    <div id='tuner' onClick={handleNav}>TUNER</div>
                </div>

                <div id="log">
                    <p>{flag ? "Loged" : ""}</p>
                    <div id='login' onClick={handleNav}>LOG IN</div>
                    {flag ? <div onClick={()=>dispatch(handleDisconnect())}>LOG OUT</div> : ""}
                </div> */}
                
            </div>

            <div className="buttons">
                <div className="NavBasket">
                    <i className="fa-solid fa-cart-shopping" id="cart" onClick={handleNav}></i>
                </div>

                <div className="burgerButton">
                    <i className="fa-solid fa-bars" onClick={()=>{setShown(!shown)}}></i>
                    <div className={shown ? "linksBurger" : "hidden"} >
                        <div id='products' onClick={handleNav}>PRODUCTS</div>
                        <div id='guitar' onClick={handleNav}>GUITAR</div>
                        <div id='string' onClick={handleNav}>STRING</div>
                        <div id='pedal' onClick={handleNav}>PEDAL</div>
                        <div id='amp' onClick={handleNav}>AMP</div>
                        <div id='tuner' onClick={handleNav}>TUNER</div>
                        <div id="log">
                            
                            <p>{flag ? "Loged" : ""}</p>
                            <div id='login' onClick={handleNav}>LOG IN</div>
                            {flag ? <div onClick={()=>dispatch(handleDisconnect())}>LOG OUT</div> : ""}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}