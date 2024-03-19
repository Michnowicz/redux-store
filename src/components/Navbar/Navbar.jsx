import { useNavigate } from "react-router-dom"
import "./Navbar.css"
import { useSelector, useDispatch } from "react-redux"
import { handleLocation } from "../../app/features/loginSlice"
import { useEffect } from "react"

export default function Navbar() {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useSelector((state) => state.location)

    // useEffect(()=>{
    //     console.log(location);
    // },[location])


    const handleNav = (e) => {
        navigate(`/${e.target.id}`)
    }

    return(
        <div className="Navbar">
            {/* <div className="logo">
                logo
            </div> */}

            <div className="links">
                <div id='products' onClick={handleNav}>PRODUCTS</div>
                <div id='guitar' onClick={handleNav}>GUITAR</div>
                <div id='string' onClick={handleNav}>STRING</div>
                <div id='pedal' onClick={handleNav}>PEDAL</div>
                <div id='amp' onClick={handleNav}>AMP</div>
                <div id='tuner' onClick={handleNav}>TUNER</div>
                <div id='login' onClick={handleNav}>LOG IN</div>
            </div>

            {/* <div className="burgerButton">
                <i className="fa-solid fa-bars"></i>
                <div className="links">
                    <button>PRODUCTS</button>
                    <button>PRODUCTS</button>
                </div>
            </div> */}

        </div>
    )
}