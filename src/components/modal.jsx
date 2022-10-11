/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { addDonation } from '../feature/DataSlice';

export default function Modal(props) {
  const { name, image } = props;
  const dispatch = useDispatch();

  const currency = ['₹', '$', '£', '¥'];

  const initialValue = {
    currency: '₹',
    amount: 0,
    name: 'anonymous',
    message: '...',
  };

  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    dispatch(addDonation(values));
  };

  const state = useSelector((state) => state.dataReducer);

  console.log(state);

  return (
    <>
      <div className="flex items-center justify-center h-60">
        <button
          className="p-2 text-purple-100 bg-purple-600 rounded-md"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open Modal
        </button>
      </div>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <button
              type="button"
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setShowModal(false)}
            />
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto rounded-md bg-slate-600 shadow-lg">
                <div className="mt-3 sm:flex">
                  <div className="text-center mx-auto">
                    <button type="button" className="text-2xl text-slate-300 text-right w-full" onClick={() => setShowModal(false)}>X</button>
                    <div className="flex justify-start items-center">
                      <img src={image} alt={name} className="w-12 h-12 rounded-2xl mx-2" />
                      <p className="text-2xl mx-4">{name}</p>
                    </div>
                    <hr className="border-solid border-0 border-b border-slate-400 m-4 w-3/5 mx-auto" />
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-300">
                      Send your love to
                      {' '}
                      {name}
                      {' '}
                      to become a real fan
                    </p>
                    <div className="my-8">
                      <form className="flex flex-col justify-center items-center w-5/6">
                        <div className="m-2">
                          <input
                            type="number"
                            className="border-slate-400 bg-slate-300 outline-none focus:border-indigo-600 border px-2"
                            placeholder="2000"
                            onChange={(e) => handleChange(e)}
                            name="amount"
                          />
                          <select className="w-6 text-gray-500 font-bold bg-slate-300 shadow-sm outline-none appearance-none border-slate-400 focus:border-indigo-600 border" onChange={(e) => handleChange(e)} name="currency">
                            {
                              currency.map((item) => (
                                <option key={item} className="border px-auto mx-auto">{item}</option>
                              ))
                            }
                          </select>
                        </div>
                        <input type="text" placeholder="your name (Optional)" className="border-slate-400 bg-slate-300 outline-none focus:border-indigo-600 border px-5 m-2" onChange={(e) => handleChange(e)} name="name" />
                        <input type="text-field" placeholder="your message (Optional)" className="border-slate-400 bg-slate-300 outline-none focus:border-indigo-600 border px-5 m-2 h-12" onChange={(e) => handleChange(e)} name="message" />
                      </form>
                    </div>
                    <div className="items-center gap-2 mt-3 sm:flex">
                      <button
                        type="button"
                        className="w-full mt-2 p-2.5 flex-1 text-white bg-red-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"
                        onClick={(e) => { handleSubmit(e); }}
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

Modal.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
