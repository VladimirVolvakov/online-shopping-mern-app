// Components:
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductFilter from "../components/ProductFilter";
import ProductList from "../components/ProductList";
import Offer from "../components/Offer";
import Newsletter from "../components/Newsletter";

const ProductCatalog = () => {
  return (
    <div>
      <Offer />
      <Navbar />
      <ProductFilter />
      <ProductList />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductCatalog;