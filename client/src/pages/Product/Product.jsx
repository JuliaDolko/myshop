import React, { useState } from 'react' 
import "../Product/Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
   const [selectedImg, setSelectedImg] = useState("img");
   const [quantity, setQuantity] = useState(1);
   const id = useParams().id; 

   const dispatch = useDispatch()
   const {data, loading, error} = useFetch(`/products/${id}?populate=*`);



  return (
    <div className='product'>
      {loading ? ("loading")
      :(<> 
      {/* LEFT PART _ IMAGES PART  */}
      <div className="left">
        <div className="images">
          <img src={import.meta.env.VITE_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url}
             alt="" onClick={e=> setSelectedImg("img")}/>
          <img src={import.meta.env.VITE_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} 
            alt="" onClick={e=> setSelectedImg("img2")} />
        </div>
        <div className="mainImg">
          <img src={import.meta.env.VITE_UPLOAD_URL+ data?.attributes[selectedImg]?.data?.attributes?.url} alt="" />
        </div>
      </div>


      {/* RIGHT PART  */}
      <div className="right">
        <h1>{data?.attributes?.title}</h1>
        <span className='price '>${data?.attributes?.price}</span>
        <p>{data?.attributes?.description}</p>

        <div className="quantity">
          <button onClick={()=> setQuantity((prev) => prev==1 ? 1 : prev - 1) }>-</button>
          {quantity}
          <button onClick={()=> setQuantity(prev => prev+1)} >+</button>
        </div>
        <button className='add' onClick={()=>dispatch(addToCart({
          id:data.id,
          title: data.attributes.title,
          decription: data.attributes.description,
          price: data.attributes.price,
          img: data.attributes.img.data.attributes.url,
          quantity,

        }))}>
          <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="links">
          <div className="item"> <FavoriteBorderIcon/>ADD TO FAVORITES</div>
          <div className="item"> <BalanceIcon/> COMPARE </div>
        </div>

        {/* for UI purposes  */}
        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>
            <hr/>
            <div className="info">
              <span>DESCRIPTION</span>
              <span>ADDITIONAL INFORMATION</span>
              <span>FAQ</span>
            </div>
      </div>
      </> )}
    </div>
  );
}

export default Product


