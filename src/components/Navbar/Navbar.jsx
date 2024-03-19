import { useNavigate } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    
    const navigate = useNavigate()

    const handleNav = (e) => {
        navigate(`/${e.target.innerText.toLowerCase()}`)
    }

    return(
        <div className="Navbar">
            {/* <div className="logo">
                logo
            </div> */}

            <div className="links">
                <div onClick={handleNav}>PRODUCTS</div>
                <div onClick={handleNav}>GUITAR</div>
                <div onClick={handleNav}>STRING</div>
                <div onClick={handleNav}>PEDAL</div>
                <div onClick={handleNav}>AMP</div>
                <div onClick={handleNav}>TUNER</div>
                <div onClick={handleNav}>LOGIN</div>
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