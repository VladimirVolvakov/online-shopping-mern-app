// Components:
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Offer from "../components/Offer";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Offer />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;