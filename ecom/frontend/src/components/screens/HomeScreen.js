import React from 'react';
import Header from '../Header';
import ShopSection from '../homeComponents/ShopSection.js';
import Footer from "../Footer"

const HomeScreen = () => {
    window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <ShopSection />
      <Footer />
    </>
  )
}

export default HomeScreen
