import React from 'react';
import { useDispatch } from 'react-redux';
import { chooseClothesAction } from '../Redux/actions/actions';

export default function ProductItems(props) {
  const { item } = props;
  const dispatch = useDispatch();
  return (
    <div className="card text-center">
      <img src={item.imgSrc_jpg} alt="123" />
      <h4>
        <b>{item.name}</b>
      </h4>
      <button
        onClick={() => {
          dispatch(chooseClothesAction(item));
        }}
      >
        Thử đồ
      </button>
    </div>
  );
}
