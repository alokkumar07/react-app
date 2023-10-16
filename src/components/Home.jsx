import { useEffect, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Categories from "./Categories";
import {FaHeart} from "react-icons/fa";
import "./Home.css"

function Home() {

  const navigate = useNavigate();
  const [products ,setProducts] = useState([])
  const [cproducts ,setCProducts] = useState([])
  const [search ,setSearch] = useState([])

//   useEffect(() => {
//     if (!localStorage.getItem("token")) {
//       navigate("/login");
//     }
//   }, []);

  useEffect(() => {
    const url ="http://localhost:4000/get-products"
    axios.get(url)
    .then((res) => {
        if(res.data.products){
          setProducts(res.data.products);
        }
    })
    .catch((err) =>{
        alert("Server Error: " + err.message);
    })
  }, []);

  const handleSearch = (value) =>{
    setSearch(value);
  }

const handleClick = () =>{
    // console.log('clicked')
    let filterProducts = products.filter((item)=>{
        if(item.productname.toLowerCase().includes(search.toLowerCase()) || 
          item.productDesc.toLowerCase().includes(search.toLowerCase()) || 
          item.productPrice.toLowerCase().includes(search.toLowerCase()) || 
          item.Category.toLowerCase().includes(search.toLowerCase())){
            return item;
        }
    })
    setCProducts(filterProducts)
}

const handleCategory = (value) =>{
     let filterProducts = products.filter((item)=>{
        if(item.Category == value){
            return item;
        }
    })
    setCProducts(filterProducts)
}

const handleLike = (productId) =>{
    let userId = localStorage.getItem('userId')
//   console.log('handleLike', productId, userId)
  const url ="http://localhost:4000/like-product"
  const data = {userId , productId}
  axios.post(url ,data)
  .then((res) => {
     if(res.data.message) {
         alert('Liked')
     }
  })
  .catch((err) =>{
      alert("Server Error: " + err.message);
  })
}

const handleProduct = (id) =>{
    navigate('/product/' + id )
}
  return (
    <div>
      <Header search ={search} handleSearch={handleSearch} handleClick={handleClick}/>
      <Categories  handleCategory={handleCategory}/>
     
      <h5>SEARCH RESULTS : </h5>
       <div className="d-flex justify-content-centre flex-wrap">

{
    cproducts && cproducts.length >0 &&
    cproducts.map((item)=>{
        return(
            
            <div className="card m-3" key={item._id}>
              <div onClick={() =>handleLike(item._id)} className="icon-con">
                <FaHeart className="icons"/>  
                </div>
             <img width ="250px" height="150px" src={ "http://localhost:4000/"+ item.productImage} />
             <p className="m-2 price-text"> Rs.{item.productPrice}/- </p>
             <p className="m-2">{item.productname} | {item.Category}</p>
             <p className="m-2 text-success">{item.productDesc}</p>
      </div>
          )
      })
  }
  </div>
      <h2 >ALL RESULTS : </h2>
      <div className="d-flex justify-content-centre flex-wrap">

      {
          products && products.length >0 &&
          products.map((item , index)=>{
              return(
                  
                  <div onClick={()=>handleProduct(item._id)} className="card m-3" key={item._id}> 
                  <div onClick={() =>handleLike(item._id)} className="icon-con">

                    <FaHeart className="icons"/>  
                </div>
                    <img width ="250px" height="150px" src={ "http://localhost:4000/"+ item.productImage} />
                   <p className="m-2 price-text">Rs. {item.productPrice} /-</p>
                   <p className="m-2">{item.productname} | {item.Category}</p>
                   <p className="m-2 text-success">{item.productDesc}</p>
            </div>
                )
            })
        }
        </div>
       
    </div>
  );
}

export default Home;
