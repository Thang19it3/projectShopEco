import React from 'react';
import Header from '../components/Header';
import ShopSection from './../components/homeComponents/ShopSection';
import ContactInfo from './../components/homeComponents/ContactInfo';

import Footer from './../components/Footer';

const HomeScreem = ({ match }) => {
    window.scrollTo(0, 0);
    const keyword = match.params.keyword;
  return (
    <div>
      <Header />
      <ShopSection keyword={keyword} />

      <ContactInfo />
      <Footer />
    </div>
  )
}

export default HomeScreem
