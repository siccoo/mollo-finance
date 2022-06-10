import React from 'react';
import { Blog, Features, Footer, Header, Possibility, WhatMollo } from './containers';
import { Brand, Navbar, CTA } from "./components";

const App = () => {
  return (
    <div className='app'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatMollo />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App