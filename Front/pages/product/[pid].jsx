import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Layout from "../../layouts/Main";
import Breadcrumb from "../../components/breadcrumb";
import ProductsFeatured from "../../components/products-featured";
import Gallery from "../../components/product-single/gallery";
import Content from "../../components/product-single/content";
import Description from "../../components/product-single/description";
import Reviews from "../../components/product-single/reviews";
import { useRouter } from "next/router";
import { getVariants } from "APIS/product";

const Product = ({ product }) => {
  const router = useRouter();
  const { pid } = router.query;
  const [products, setProducts] = useState([]);

  const fetchVariants = async () => {
    const variants = await getVariants(pid);
    setProducts(variants);
  };

  useEffect(() => {
    fetchVariants();
  }, []);

  return (
    <Layout>
      <Breadcrumb />

      <section className="product-single">
        <div className="container">
          <div className="product-single__content">
            {/* <Gallery images={product.image} /> */}
            <Content products={products} id={pid} />
          </div>

          <div className="product-single__info">
            <div className="product-single__info-btns">
              {/* <button type="button" onClick={() => setShowBlock('description')} className={`btn btn--rounded ${showBlock === 'description' ? 'btn--active' : ''}`}>Description</button>
              <button type="button" onClick={() => setShowBlock('reviews')} className={`btn btn--rounded ${showBlock === 'reviews' ? 'btn--active' : ''}`}>Reviews (2)</button> */}
            </div>

            {/* <Description show={showBlock === 'description'} />
            <Reviews product={product} show={showBlock === 'reviews'} /> */}
          </div>
        </div>
      </section>

      <div className="product-single-page">
        <ProductsFeatured />
      </div>
      <Footer />
    </Layout>
  );
};

export default Product;
