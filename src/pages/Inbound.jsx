import React, { useState } from 'react';
import Header from '../components/Header';
import InboundHeader from '../components/InboundHero';
import PackagesList from '../components/PackagesList'; // Import PackagesList component
import Footer from '../components/Footer';
import ContactForm from '../components/Contactform';

const Inbound = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
  };

  return (
    <>
      <Header />
      <InboundHeader onSearch={handleSearch} />
      
      {/* Pass the search query as a prop to PackagesList */}
      <PackagesList searchQuery={query} type="inbound"/>
      <ContactForm/>
      <Footer/>
    </>
  );
};

export default Inbound;
