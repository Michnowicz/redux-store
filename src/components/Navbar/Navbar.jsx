import { useNavigate } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    
    const navigate = useNavigate()

    return(
        <div className="Navbar">
            {/* <div className="logo">
                logo
            </div> */}

            <div className="links">
                <div onClick={()=>(navigate("/"))}>PRODUCTS</div>
                <div onClick={()=>(navigate("/"))}>GUITAR</div>
                <div onClick={()=>(navigate("/"))}>STRING</div>
                <div onClick={()=>(navigate("/"))}>PEDAL</div>
                <div onClick={()=>(navigate("/"))}>AMP</div>
                <div onClick={()=>(navigate("/"))}>TUNER</div>
                <div onClick={()=>(navigate("/login"))}>LOG IN</div>
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