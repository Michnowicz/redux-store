import "./Cart.css"
import { useDispatch, useSelector } from "react-redux"
import Navbar from "../Navbar/Navbar"
import { getTotal, minusOne, plusOne, removeFromCart } from "../../app/features/loginSlice"
import { useEffect } from "react"

export default function Cart() {
    
    const flag = useSelector((state)=>state.login.connection.flag)
    const cart = useSelector((state)=>state.login.cart)
    const total = useSelector((state)=>state.login.total)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getTotal())
    },[cart])


    return(
        <div className="Cart supraContainer">
            <Navbar/>

            <div className="container">
                {
                    flag == false ?
                    <h1>You need to connect to see the cart.</h1>
                    :
                    <div className="cartDiv">
                        <h1>Your cart</h1>
                        {
                            cart.map((c,i)=>(
                                <div key={i} className="cont">
                                    <hr />
                                    <div className="prod">
                                        <div>
                                            <img src={c.image} />
                                        </div>
                                        <div className="text">
                                            <h2>{c.name}</h2>
                                            <div>
                                                <p><b>quantity : </b>{c.quantity}</p>
                                                <p><b>price : </b>{c.price} €</p>
                                            </div>
                                            
                                            <div className="btnDiv">
                                                <button id={i} onClick={(e)=>dispatch(plusOne(e.target.id))}>+1</button>
                                                <button id={i} onClick={(e)=>dispatch(minusOne(e.target.id))}>-1</button>
                                                <button id={i} onClick={(e)=>dispatch(removeFromCart(e.target.id))}>
                                                    <i id={i} className="fa-solid fa-trash" onClick={(e)=>dispatch(removeFromCart(e.target.id))}></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <div className="total">
                            <div></div>
                            <p><b>Total : </b>{total} €</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}