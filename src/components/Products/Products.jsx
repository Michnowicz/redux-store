import "./Products.css"
import Navbar from "../Navbar/Navbar"
import Datas from "../Datas/Datas"
import { useParams } from "react-router-dom"
import Carousel from "../Carousel/Carousel"

export default function Products() {

    const {location} = useParams()
    
    return(
        <div className="Products supraContainer">
            <Navbar/>

            <Datas location={location}/>
        </div>
    )
}