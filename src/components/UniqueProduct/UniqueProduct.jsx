import { useParams } from 'react-router-dom'
import './UniqueProduct.css'
import Data from "../../json/products.json"
import Navbar from '../Navbar/Navbar'



export default function UniqueProduct() {
    
    const {id} = useParams()

    return(
        <div className='UniqueProduct supraContainer'>
            <Navbar/>
                {
                    Data.filter(p => p.id == id).map((d,i)=>(
                        <div id={i} className="container">
                            <div className='imgDiv'>
                                <div>
                                    <h1>{d.name}</h1>
                                </div>
                                <div>
                                    <img src={d.image} alt="" />
                                </div>
                            </div>
                            <div className='textDiv'>

                            </div>
                        </div>
                    ))
                }
        </div>
    )
}