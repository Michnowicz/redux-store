import "./Datas.css"
import Data from "../../json/products.json"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"



export default function Datas({location}) {

    
    const [search, setSearch] = useState('')
    const [filtered, setFiltered] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        console.log(location);
        if (location != 'products' || location != undefined) {
            const newFiltered = Data.filter(d => d.category == location)
            setFiltered(newFiltered)
        } else {
            const newFiltered = Data.map((d,i)=>{
                return d
            })
            setFiltered(Data)
        }
        
    }, [location])

    const handleNav = (e) => {
        if (location == undefined) {
            navigate(`/products/${e.target.id}`)
        } else {
            navigate(`/${location}/${e.target.id}`)
        }
    }




    return(

        <div className="container">
                
            <input className="searchBar" type="text" placeholder="search by name" onChange={(e) => (setSearch(e.target.value.toLowerCase()))}/>

            <div className="datas">
                {
                    (location == 'products' ? Data : location == undefined ? Data : filtered).filter(d => d.name.toLowerCase().includes(search)).map((d,i)=>(
                        <div key={i} className="data">
                            <div className="imageDiv" id={d.id} onClick={handleNav}>
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