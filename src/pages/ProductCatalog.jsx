// Components:
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductFilter from "../components/ProductFilter";
import Offer from "../components/Offer";
import Newsletter from "../components/Newsletter";

const ProductCatalog = () => {
  return (
    <div>
      <Offer />
      <Navbar />
      <ProductFilter />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductCatalog;