import "./Datas.css"
import Data from "../../json/products.json"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { handleAddtoCart } from "../../app/features/loginSlice"



export default function Datas({location}) {

    
    const [search, setSearch] = useState('')
    const [filtered, setFiltered] = useState([])
    const navigate = useNavigate()
    const flag = useSelector((state) => state.login.connection.flag)
    const dispatch = useDispatch()


    useEffect(() => {
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

    const handleAdd = (e) => {
        const newProduct = Data.filter(d=>d.id == e.target.id)
        const newObject = {id: newProduct[0].id,name: newProduct[0].name,price: newProduct[0].price,quantity: 1, image: newProduct[0].image}
        dispatch(handleAddtoCart(newObject))
    }


    return(

        <div className="container">
                
            <input className="searchBar" type="text" placeholder="search by name" onChange={(e) => (setSearch(e.target.value.toLowerCase()))}/>

            <div className="datas">
                {
                    (location == 'products' ? Data : location == undefined ? Data : filtered).filter(d => d.name.toLowerCase().includes(search)).map((d,i)=>(
                        <div key={i} className="data">
                            <div className="imageDiv" id={d.id} onClick={handleNav}>
                                <img src={d.image} id={d.id} onClick={handleNav}/>
                            </div>
                            <div className="textDiv">
                                <p className="titleLink">{d.name}</p>
                                <p className="price">{d.price} €</p>
                                {
                                    flag ?
                                    <button className="addCartBtn" id={d.id} onClick={handleAdd}>ADD</button>
                                    :
                                    ""
                                }
                                
                            </div>
                        </div>
                    ))
                }
            </div>
                
        </div>
    )
}