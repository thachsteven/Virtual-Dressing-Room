import React from 'react';
import ProjectIntroduction from './ProjectIntroduction';
import Product from './Product';
import Model from './Model';
import '../assets/css/style.css';

export default function DressingRoom() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <ProjectIntroduction />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <Product />
        </div>
        <div className="col-4">
          <Model />
        </div>
      </div>
    </div>
  );
}
