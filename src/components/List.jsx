import React from 'react';
import { useSelector } from 'react-redux';
import Modal from './modal';

const List = () => {
  const data = useSelector((state) => state.dataReducer.data);

  return (
    <div className="text-center">
      <h1 className="text-2xl text-slate-400 mt-16 font-bold">All creators</h1>
      <div className="flex justify-center items-center flex-col md:flex-row md:flex-wrap md:mt-12">
        {
        data.map((item) => (
          <div key={item.id} className="border rounded-lg w-52 h-52 m-8 flex justify-around items-center flex-col cursor-pointer pt-4 hover:border-gray-100">
            <img src={item.image} alt={item.name} className="w-14 h-14 rounded-xl" />
            <div>
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-md font-light">{item.profession}</p>
            </div>
            <Modal data={item} />
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default List;
