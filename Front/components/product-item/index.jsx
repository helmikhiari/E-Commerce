import Link from "next/link";
import { some } from "lodash";

const ProductItem = ({
  image,
  id,
  name,
  price,
  currentPrice,
  isFavourite,
  discount,
}) => {
  return (
    <div className="product-item">
      <div className="product__image">
        <button
          type="button"
          className={`btn-heart ${isFavourite ? "btn-heart--active" : ""}`}
        >
          <i className="icon-heart"></i>
        </button>

        <Link href={`/product/${id}`}>
          <a>
            <img src={image || ""} alt="product" />
            {discount && (
              <span className="product__discount">{discount * 100}%</span>
            )}
          </a>
        </Link>
      </div>

      <div className="product__description">
        <h3>{name}</h3>
        <div
          className={
            "product__price " + (discount ? "product__price--discount" : "")
          }
        >
          <h4>${currentPrice - currentPrice * discount}</h4>

          {discount && <span>${currentPrice}</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
