import React from 'react'
import { useContext } from 'react';
import { ShopContext } from '../../context/shop-context'
const Product = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
    const cartItemAmount = cartItems[id]
    return (
        /*<div className="product">
            <img src={productImage} />
            <div className="description">
                <p><b>{productName}</b></p>
            </div>
            <p>₹{price}</p>


            <button className="btn buttonAdd" onClick={() => addToCart(id)}>Add to Cart</button>

        </div>*/
        <div className="product">
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure><img src={productImage} alt={productImage} /></figure>
                <div className="card-body">
                    <div className="description">
                        <p><b>{productName}</b></p>

                        <p>₹{price}</p></div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-neutral" onClick={() => addToCart(id)}>Buy Now{cartItemAmount > 0 && <>({cartItemAmount}) </>}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Product };