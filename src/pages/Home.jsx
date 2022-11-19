// Components:
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Offer from "../components/Offer";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Offer />
      <Navbar />
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;