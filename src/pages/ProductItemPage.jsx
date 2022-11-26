// Components:
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Offer from "../components/Offer";
import ProductItemInfo from "../components/ProductItemInfo";

const ProductItemPage = () => {
  return (
    <div>
      <Offer />
      <Navbar />
      <ProductItemInfo />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductItemPage;