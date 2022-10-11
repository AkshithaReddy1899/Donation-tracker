/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="w-full h-full flex justify-center items-center flex-col p-4">
    <h1 className="text-3xl text-slate-500">Welcome!</h1>
    <p className="p-2 mt-8 text-sm md:text-xl lg:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, incidunt, totam possimus animi perferendis aut nobis dignissimos doloribus architecto officia quam quibusdam quod! Rerum ad numquam eligendi quos magni veritatis.</p>
    <Link to="/all-creators" className="border border-slate-600 p-2 rounded-md mt-4 hover:border-solid hover:border-white bg-slate-400 text-slate-900 font-bold">All Creators</Link>
  </div>
);

export default Home;
