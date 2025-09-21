import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopeContext } from '../../Context/ShopeContext'

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopeContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-raight-star">
            <img src={star_icon} alt="" />
            <img src= {star_icon} alt="" />
            <img src= {star_icon} alt="" />
            <img src= {star_icon} alt="" />
            <img src= {star_dull_icon} alt="" />
            <p>154</p>
        </div>
        <div className="productdisplay-right-price">
            <div className="productdisplay-right-old-price">Br{product.old_price}</div>
            <div className="productdisplay-right-new">Br{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            A lightweight, knitted pullover shirt with a round neckline and short sleeves, worn as an undershirt or outer garment.
             Comfortable, breathable, and versatile perfect for casual wear, layering, or everyday style.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Your Size</h1>
            <div className='productdisplay-right-sizes'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>2XL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className='productdisplay-right-category'><span>Category: </span>Women, T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags : </span>Modern, Latest</p>

      </div>
    </div>
  )
}

export default ProductDisplay
