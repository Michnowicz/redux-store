import { useEffect, useState } from "react"
import "./Carousel.css"
import Data from "../../json/products.json"
import { useSelector, useDispatch } from "react-redux"
import { addCarousel, changeCarID } from "../../app/features/loginSlice"


export default function Carousel() {

    const carouselImages = useSelector((state)=>state.login.carousel)
    const carID = useSelector((state)=>state.login.carID)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(addCarousel())
        console.log(carouselImages);
    },[carouselImages])

    // useEffect(()=>{console.log(images);},[images])
    
    return(
        <div className="Carousel">
            <i className="fa-solid fa-chevron-left" id="prev" onClick={(e)=>dispatch(changeCarID(e.target.id))}></i>

            <div className="images">
                {carouselImages.length == 0 ? "" : <img src={carouselImages[carID].image} alt="" />}
            </div>
            
            <i className="fa-solid fa-chevron-right" id="next" onClick={(e)=>dispatch(changeCarID(e.target.id))}></i>
        </div>
    )
}