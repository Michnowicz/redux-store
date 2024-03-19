import "./Datas.css"
import Data from "../../json/products.json"

import { useState, useEffect } from "react"



export default function Datas({location}) {

    
    const [search, setSearch] = useState('')
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        if (location != 'products') {
            const newFiltered = Data.filter(d => d.category == location)
            setFiltered(newFiltered)
        } else {
            setFiltered(Data)
        }
        
    }, [location])

    return(

        <div className="container">
                
            <input className="searchBar" type="text" placeholder="search by name" onChange={(e) => (setSearch(e.target.value.toLowerCase()))}/>

            <div className="datas">
                {
                    filtered.filter((d => d.name.toLowerCase().includes(search))).map((d,i)=>(
                        <div key={i} className="data">
                            <div className="imageDiv">
                                <img src={d.image} alt=""/>
                            </div>
                            <div className="textDiv">
                                <p className="titleLink">{d.name}</p>
                                <p className="price">{d.price} €</p>
                                <button className="addCartBtn">ADD</button>
                            </div>
                        </div>
                    ))
                }
            </div>
                
        </div>
    )
}