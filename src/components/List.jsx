import React from 'react';
import { useSelector } from 'react-redux';

const List = () => {
  const state = useSelector((state) => state.dataReducer);

  console.log(state);
  return (
    <div>List</div>
  );
};

export default List;
