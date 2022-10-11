import React from 'react';
import { useSelector } from 'react-redux';
import Modal from './modal';

const List = () => {
  const data = useSelector((state) => state.dataReducer.data);

  return (
    <div className="text-center">
      <h1>All creators</h1>
      <div className="flex justify-center items-center flex-col">
        {
        data.map((item) => (
          <div key={item.id} className="border rounded-lg w-52 h-52 m-8 flex justify-around items-center flex-col cursor-pointer hover:border-gray-100">
            <img src={item.image} alt={item.name} className="w-20 h-20 rounded-3xl" />
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-md font-light">{item.profession}</p>
            </div>
            <Modal />
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default List;
