import React from "react";
import AboutSection from "../components/body/AboutSection";
import Body from "../components/body/Body";
import HeroBox from "../components/body/HeroBox";
import HeroImg from "../components/body/HeroImg";
import StatsSection from "../components/body/StatsSection";
import Layout from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <HeroImg />
      <Body>
        <HeroBox />
        <StatsSection />
        <AboutSection />
      </Body>
    </Layout>
  );
};

export default Home;
