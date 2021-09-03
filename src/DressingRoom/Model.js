import React from 'react';
import { useSelector } from 'react-redux';

export default function Model() {
  const ModelReducer = useSelector((state) => state.ModelReducer);

  return (
    <div>
      <div className="contain">
        <div className="body" />
        <div className="model" />
        <div
          className="hairstyle"
          style={{
            width: 1000,
            height: 1000,
            background: `url("${ModelReducer.hairstyle}")`,
            position: 'absolute',
            top: '-75%',
            right: '-57%',
            transform: 'scale(0.15)',
            zIndex: 4,
          }}
        />
        <div
          className="necklace"
          style={{
            width: 500,
            height: 1000,
            background: `url("${ModelReducer.necklaces}")`,
            position: 'absolute',
            bottom: '-40%',
            right: '-3.5%',
            transform: 'scale(0.5)',
            zIndex: 4,
          }}
        />
        <div
          className="bikinitop"
          style={{
            width: 500,
            height: 500,
            background: `url("${ModelReducer.topclothes}")`,
            position: 'absolute',
            top: '-9%',
            left: '-5%',
            zIndex: 3,
            transform: 'scale(0.5)',
          }}
        />
        <div
          className="bikinibottom"
          style={{
            width: 500,
            height: 1000,
            background: `url("${ModelReducer.botclothes}")`,
            position: 'absolute',
            top: '-30%',
            left: '-5%',
            zIndex: 2,
            transform: 'scale(0.5)',
          }}
        />
        <div
          className="handbag"
          style={{
            width: 500,
            height: 1000,
            background: `url("${ModelReducer.handbags}")`,
            position: 'absolute',
            bottom: '-40%',
            right: '-3.5%',
            transform: 'scale(0.5)',
            zIndex: 4,
          }}
        />
        <div
          className="feet"
          style={{
            width: 500,
            height: 1000,
            background: `url("${ModelReducer.shoes}")`,
            position: 'absolute',
            bottom: '-37%',
            right: '-3.5%',
            transform: 'scale(0.5)',
            zIndex: 1,
          }}
        />
        <div className="background" style={{ backgroundImage: `url("${ModelReducer.background}")` }} />
      </div>
    </div>
  );
}
