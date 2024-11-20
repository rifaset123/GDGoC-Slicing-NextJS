// src/pages/index.tsx
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Breadcrumb from "./components/Breadcrumbs";
import BestsellerProducts from "./components/BestsellerProducts";

const Home = () => {
  return (
    <>
  
      <Header />
      <Navbar />
      <div className="container justify-center sm:justify-start flex mx-auto sm:px-52 mt-12 mb-4">
        <Breadcrumb />
      </div>
      <ProductList />
      <BestsellerProducts/>
    </>
  );
};

export default Home;
