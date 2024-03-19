import "./Datas.css"
import Data from "../../json/products.json"




export default function Datas({search}) {
    


    return(
        <div className="datas">
            {
                Data.filter((d => d.name.toLowerCase().includes(search))).map((d,i)=>(
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
    )
}