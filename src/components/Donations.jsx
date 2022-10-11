import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';

const Donations = () => {
  const data = useSelector((state) => state.dataReducer.list);
  const columns = [
    {
      name: 'Creator',
      selector: (row) => row.creator,
    },
    {
      name: 'Amount',
      selector: (row) => row.amount,
    },
    {
      name: 'Currency',
      selector: (row) => row.currency,
    },
    {
      name: 'Name',
      selector: (row) => row.name,
    },
    {
      name: 'Message',
      selector: (row) => row.message,
    },
  ];
  return (
    <div className="w-full h-full flex justidy-center items-center flex-col">
      <h1 className="text-3xl text-slate-500 text-bold mt-8">My Donations</h1>
      {(data.length > 0) ? (
        <div className="mt-12">
          <DataTable
            columns={columns}
            data={data}
            theme="dark"
          />
        </div>
      ) : (
        <div className="mt-20 flex justify-center items-center flex-col">
          <p>You have not made any donations for now.</p>
          <Link to="/all-creators" className="border border-slate-600 p-2 rounded-md mt-4 hover:border-solid hover:border-white bg-slate-400 text-slate-900 font-bold">To make new donations, click to pick a creator</Link>
        </div>
      )}
    </div>
  );
};

export default Donations;

/*
const columns = [
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
]

function MyComponent() {
    return (
        <DataTable
            columns={columns}
            data={data}
        />
    );
};
*/
