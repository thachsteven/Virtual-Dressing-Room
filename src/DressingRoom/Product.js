import React from 'react';
import NavTab from './NavTab';
import ProductList from './ProductList';

export default function Product() {
  return (
    <div>
      <div className="row" style={{ padding: '10px 15px 0 15px' }}>
        <NavTab />
      </div>
      <div className="row" style={{ padding: '1px 15px' }}>
        <ProductList />
      </div>
    </div>
  );
}
