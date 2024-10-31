"use client"
import { useDispatch } from 'react-redux';


const ShoppingCart = ({ thumb, name, id, color, size, count, price }) => {
  const dispatch = useDispatch();


  const setProductCount = (count: number) => {
    if(count <= 0) {
      return;
    }

    

  }

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
          <button type="button"  className="quantity-button__btn">
            -
          </button>
          <span>{ count }</span>
          <button type="button"  className="quantity-button__btn">
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