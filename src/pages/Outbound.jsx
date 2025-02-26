import React, { useState } from 'react';
import Header from '../components/Header';
import OutboundHeader from '../components/OutboundHero';
import PackagesList from '../components/PackagesList';
import Footer from '../components/Footer';
import ContactForm from '../components/Contactform';

const Outbound = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    console.log("Search Query:", searchQuery); // Debugging log
  };

  return (
    <>
      <Header />
      <OutboundHeader onSearch={handleSearch} />
      <PackagesList searchQuery={query} type="outbound" />
      <ContactForm/>
      <Footer/>
    </>
  );
};

export default Outbound;
