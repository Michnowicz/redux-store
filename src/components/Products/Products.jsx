import "./Products.css"
import Navbar from "../Navbar/Navbar"
import Datas from "../Datas/Datas"

import { useState } from "react"

export default function Products() {

    const [search, setSearch] = useState('')
    
    return(
        <div className="Products supraContainer">
            <Navbar/>

            <div className="container">
                
                <input className="searchBar" type="text" placeholder="search by name" onChange={(e) => (setSearch(e.target.value.toLowerCase()))}/>

                <Datas search={search}/>
            </div>
        </div>
    )
}