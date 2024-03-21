import { useParams } from 'react-router-dom'
import './UniqueProduct.css'
import Data from "../../json/products.json"
import Navbar from '../Navbar/Navbar'

import { useSelector, useDispatch } from 'react-redux'
import { handleAddtoCart } from "../../app/features/loginSlice"

export default function UniqueProduct() {
    
    const {id} = useParams()
    const flag = useSelector((state) => state.login.connection.flag)
    const dispatch = useDispatch()

    const handleAdd = (e) => {
        const newProduct = Data.filter(d=>d.id == e.target.id)
        const newObject = {id: newProduct[0].id,name: newProduct[0].name,price: newProduct[0].price,quantity: 1, image: newProduct[0].image}
        dispatch(handleAddtoCart(newObject))
    }

    return(
        <div className='UniqueProduct supraContainer'>
            <Navbar/>
                {
                    Data.filter(p => p.id == id).map((d,i)=>(
                        <div key={i} className="container">
                            <div className='imgDiv'>
                                <div>
                                    <h1>{d.name}</h1>
                                </div>
                                <div>
                                    <img src={d.image} alt="" />
                                </div>
                            </div>
                            
                            <div className='textDiv'>
                                <h2>{d.price} €</h2>
                                <p>{d.text}</p>
                                {
                                    flag ?
                                    <button className="addCartBtn" id={d.id} onClick={handleAdd}>ADD TO CART</button>
                                    :
                                    ""
                                }
                            </div>
                        </div>
                    ))
                }
        </div>
    )
}