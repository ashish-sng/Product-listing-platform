import React from "react";
import "./Home.css";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";

const dummyData = [
  {
    name: "Company A",
    category: ["Fintech", "Technology"],
    logoUrl: "https://example.com/company-a-logo.png",
    description: "Company A description.",
    likes: 50,
    comments: ["Great company!", "Impressive products."],
  },
  {
    name: "Company B",
    category: ["Healthcare", "Technology"],
    logoUrl: "https://example.com/company-b-logo.png",
    description: "Company B description.",
    likes: 75,
    comments: ["Innovative solutions.", "Excellent customer service."],
  },
  {
    name: "Company C",
    category: ["E-commerce", "Technology"],
    logoUrl: "https://example.com/company-c-logo.png",
    description: "Company C description.",
    likes: 120,
    comments: ["Top-notch quality.", "Highly recommended."],
  },
];

const Home = () => {
  return (
    <div className="main__home">
      <Header />
      <Banner />
      <Footer dummyData={dummyData} />
    </div>
  );
};

export default Home;
