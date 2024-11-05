
import { useState } from 'react';
import { useDispatch } from 'react-redux';


const ShoppingCart = ({ thumb, name, id, color, size, stock, price,qte }) => {
  const [quantity,setQuantity]=useState(qte);
  const plus=()=>setQuantity(++quantity)
  const minus=()=>setQuantity(--quantity);


  return (
    <tr>
      <td>
        <div className="cart-product">
          <div className="cart-product__img">
            <img src={thumb} alt="" />
          </div>

          <div className="cart-product__content">
            <h3>{name}</h3>
            <p>#{id}</p>
          </div>
        </div>
      </td>
      <td className="cart-item-before" data-label="Color">{color}</td>
      <td className="cart-item-before" data-label="Size">{size}</td>
      <td>
        <div className="quantity-button">
          <button type="button"  className="quantity-button__btn" onClick={minus} disabled={quantity<=1}>
            -
          </button>
          <span>{ quantity }</span>
          <button type="button"  className="quantity-button__btn" onClick={plus} disabled={quantity>=stock}>
            +
          </button>
        </div>
      </td>
      <td>${price}</td>
      <td className="cart-item-cancel"><i className="icon-cancel"></i></td>
    </tr>
  )
};

  
export default ShoppingCart