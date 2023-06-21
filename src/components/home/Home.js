import React, { useEffect } from "react";
import "./Home.css";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import useProductContext from "../../hooks/useProductContext";

const Home = () => {
  const { setLoggedIn } = useProductContext();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="main__home">
      <Header />
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
