import { ContainerHome } from "../styles/home/home";
import Category from "../components/home/Category";
import categories from "../categories.json";
import Navbar from "../components/general/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <ContainerHome>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </ContainerHome>
    </>
  );
};

export default Home;
