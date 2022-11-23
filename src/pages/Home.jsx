// Components:
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Offer from "../components/Offer";
import FavouriteProducts from "../components/FavouriteProducts";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Offer />
      <Navbar />
      <Slider />
      <Categories />
      <FavouriteProducts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;