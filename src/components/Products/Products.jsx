import "./Products.css"
import Navbar from "../Navbar/Navbar"
import Data from "../../data/products.json"
import { useState } from "react"

export default function Products() {

    const [search, setSearch] = useState('')
    
    return(
        <div className="Products supraContainer">
            <Navbar/>

            <div className="container">
                
                <input type="text" placeholder="search by name" onChange={(e) => (setSearch(e.target.value))}/>

                <div className="datas">
                    {
                        Data.filter((d => d.name.toLowerCase().includes(search))).map((d,i)=>(
                            <div key={i} className="data">
                                <div className="imageDiv">
                                    <img src={d.image} alt="" />
                                </div>
                                <div className="textDiv">
                                    <p><b>title : </b>{d.name}</p>
                                    {/* <p><b>price : </b>{d.price} €</p> */}
                                    <button className="addCartBtn">{d.price} €</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}