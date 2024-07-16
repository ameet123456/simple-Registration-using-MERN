import React from 'react';
import HEader from './HEader.js';
import Footer from './Footer.js';

function Layout({ children }) {
  return (
    <div>
      <HEader />
      <main style={{ minHeight: "85vh" }}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
