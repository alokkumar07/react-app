import { useEffect, useState } from "react";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AddProduct() {
  const navigate = useNavigate();
  const [productname, setProductname] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [Category, setCategory] = useState("");
  const [productImage, setproductImage] = useState(null);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  const handleApi = () => {

    const formData = new FormData();
    formData.append('productname' , productname);
    formData.append('productDesc' , productDesc);
    formData.append('productPrice' , productPrice);
    formData.append('Category' , Category);
    formData.append('productImage' , productImage);
     
    const url='http://localhost:4000/add-product';
    
    axios.post(url, formData)
    .then((res) => {
        console.log(res);
        if(res.data.message){
            alert('Product added successfully')
            navigate('/')
        }
    })
    .catch((err) =>{
        console.log(err);
    })

  };

  return (
    <div>
      <Header />
      <div className="p-3">
        <h2>ADD PRODUCT HERE:</h2>
        <label>Product Name</label>
        <input
          className="form-control"
          type="text"
          value={productname}
          onChange={(e) => {
            setProductname(e.target.value);
          }}
        />
        <label>Product Description</label>
        <input
          className="form-control"
          type="text"
          value={productDesc}
          onChange={(e) => {
            setProductDesc(e.target.value);
          }}
        />
        <label>Product Price</label>
        <input
          className="form-control"
          type="text"
          value={productPrice}
          onChange={(e) => {
            setProductPrice(e.target.value);
          }}
        />
        <label>Product Image</label>
        <input
          className="form-control"
          type="file"
          onChange={(e) => {
            setproductImage(e.target.files[0]);
          }}
        />
        <label>Product Category</label>
        <select
          className="form-control"
          value={Category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option>Bikes</option>
          <option>Mobiles</option>
          <option>Cloth</option>
        </select>
        <button onClick={handleApi} className="btn btn-primary mt-3">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default AddProduct;
