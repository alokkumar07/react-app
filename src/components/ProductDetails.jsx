import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Header from "./Header";

function ProductDetail(){
    const [product ,setProduct] = useState()
   const pUrl = useParams()
   console.log(pUrl)
   useEffect(() => {
    const url ="http://localhost:4000/get-product/" + pUrl.productId;
    axios.get(url)
    .then((res) => {
      console.log(res)
      if(res.data.product){
        setProduct(res.data.product)
      }
    })
    .catch((err) =>{
        alert("Server Error: " + err.message);
    })
  }, []);
    return(
        <div>
            <Header/>
             PRODUCT DETAILS:
            <div>
               {product && <div>
                    <img width="250px" height='250px' src={'http://localhost:4000/' + product.productImage} alt="" />
                    <p className="m-2 price-text"> Rs.{product.productPrice}/- </p>
                    <p className="m-2 text-success">{product.productDesc}</p>

                </div>}
                <div>
                    { product && product.productname}
                </div>
            </div>
        </div>
    )
}

export default ProductDetail