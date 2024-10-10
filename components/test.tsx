'use client';
import { useState } from 'react';

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    setIsOpen(true);
  };

  const closeForm = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h2>Popup Form</h2>
      <p>Click on the button at the bottom of this page to open the login form.</p>
      <p>The button and form are fixed - always positioned at the bottom of the browser window.</p>

      <button className="open-button bg-white text-xl text-black" onClick={openForm}>
        Open Form
      </button>

      {isOpen && (
        <div className="form-popup flex justify-center items-center bg-white h-full w-full rounded-lg  md:px-16 px-1">
            <div className='flex flex-row justify-end items-end p-4'>
                <h4 className='bg-red-600 text-3xl text-slate-100 p-10 w-auto h-auto items-center cursor-pointer' onClick={closeForm}>X</h4>
            </div>
          <form className="flex flex-col gap-4 p-10">
            <div className='flex flex-row w-full gap-96'>
                <h1 className='bg-black text-2xl text-white'>Login</h1>
                <button type="button" className="btn cancel flex justify-end items-end float-end bg-red-900 text-2xl text-white" onClick={closeForm}>Close</button>
            </div>
            

            <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email" required />

            <label htmlFor="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required />

            <button type="submit" className="btn">Login</button>
          </form>
        </div>
      )}

      <style jsx>{`

        .open-button {
          background-color: #555;
          color: white;
          padding: 16px 20px;
          border: none;
          cursor: pointer;
          opacity: 0.8;
          bottom: 23px;
          right: 28px;
          width: 280px;
        }

        .form-popup {
          display: block;
          bottom: 0;
          border: 3px solid #f1f1f1;
          z-index: 9;
        }

        .form-container {
          padding: 10px;
          background-color: white;
        }

        .form-container input[type=text],
        .form-container input[type=password] {
          width: 100%;
          padding: 15px;
          margin: 5px 0 22px 0;
          border: none;
          background: #f1f1f1;
        }

        .form-container input[type=text]:focus,
        .form-container input[type=password]:focus {
          background-color: #ddd;
          outline: none;
        }

        .form-container .btn {
          background-color: #04AA6D;
          color: white;
          padding: 16px 20px;
          border: none;
          cursor: pointer;
          width: 100%;
          margin-bottom: 10px;
          opacity: 0.8;
        }

        .form-container .cancel {
          background-color: red;
        }

        .form-container .btn:hover,
        .open-button:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
