// Components:
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Offer from "../components/Offer";
import ShoppingCart from "../components/ShoppingCart";

const Cart = () => {
  return (
    <div>
      <Offer />
      <Navbar />
      <ShoppingCart />
      <Footer />
    </div>
  );
};

export default Cart;