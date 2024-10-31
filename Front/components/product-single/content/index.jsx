import { useEffect, useState } from "react";

import CheckboxColor from "../../products-filter/form-builder/checkbox-color";
import { useDispatch, useSelector } from "react-redux";
import { some } from "lodash";
import Product from "./../../../pages/product/[pid]";
import { setProducts } from "reducers/productSlice";

const Content = ({ products, id }) => {
  const dispatch = useDispatch();
  const pr = useSelector((state) => state.products.products);
  const [product, setProduct] = useState(() => pr.filter((pr) => pr._id == id));

  const [count, setCount] = useState(1);
  const [color, setColor] = useState("");
  const [itemSize, setItemSize] = useState("");
  const [productsColors, setProductColors] = useState([]);
  const [productsSizes, setProductSizes] = useState(() =>
    products?.map((item) => item.size)
  );
  const onColorSet = (e) => setColor(e);
  const onSelectChange = (e) => setItemSize(e.target.value);

  const { favProducts } = useSelector((state) => state.user);
  const isFavourite = some(
    favProducts,
    (productId) => productId === product[0].id
  );

  // const addToCart = () => {
  //   const productToSave = {
  //     id: product.id,
  //     name: product.name,
  //     thumb: product.images ? product.images[0] : '',
  //     price: product.currentPrice,
  //     count: count,
  //     color: color,
  //     size: itemSize
  //   }

  // const productStore = {
  //   count,
  //   product: productToSave
  // }

  const toggleFav = () => {};

  useEffect(() => {
    if (products.length > 0) {
      const x = products?.map((item) => item.color);
      console.log(x);
      setProducts(x);
    }
  }, [products]);

  return (
    <section className="product-content">
      <div className="product-content__intro">
        <h5 className="product__id">
          Product ID:<br></br>
          {product[0]?._id}
        </h5>
        <span className="product-on-sale">Sale</span>
        <h2 className="product__name">{product[0]?.name}</h2>

        {/* <div className="product__prices">
          <h4>${ product.currentPrice }</h4>
          {product.discount &&
            <span>${ product.price }</span>
          }
        </div> */}
      </div>

      <div className="product-content__filters">
        <div className="product-filter-item">
          <h5>Color:</h5>
          <div className="checkbox-color-wrapper">
            {productsColors.map((color) => (
              <CheckboxColor
                key={type.id}
                type={"radio"}
                name="product-color"
                color={color}
                valueName={type.label}
                onChange={onColorSet}
              />
            ))}
          </div>
        </div>
        <div className="product-filter-item">
          <h5>
            Size: <strong>See size table</strong>
          </h5>
          <div className="checkbox-color-wrapper">
            <div className="select-wrapper">
              <select onChange={onSelectChange}>
                <option>Choose size</option>
                {productsSizes.map((type) => (
                  <option value={type.label}>{type.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="product-filter-item">
          <h5>Quantity:</h5>
          <div className="quantity-buttons">
            <div className="quantity-button">
              <button
                type="button"
                onClick={() => setCount(count - 1)}
                className="quantity-button__btn"
              >
                -
              </button>
              <span>{count}</span>
              <button
                type="button"
                onClick={() => setCount(count + 1)}
                className="quantity-button__btn"
              >
                +
              </button>
            </div>

            <button
              type="submit"
              onClick={() => addToCart()}
              className="btn btn--rounded btn--yellow"
            >
              Add to cart
            </button>
            <button
              type="button"
              onClick={toggleFav}
              className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
            >
              <i className="icon-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
