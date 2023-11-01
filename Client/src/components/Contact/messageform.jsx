import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate ,Link} from "react-router-dom"

const MessageForm = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [message, setmessage] = useState('');
  // const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      //.post('http://localhost:5000/submit-otp', {
        .post('https://anthektiks.onrender.com/submit-otp', {

        name: name,
        email: email,
        phone: phone,
        message: message,
      })
      .then((res) => {
        alert('successfully Sent....');
        window.location.reload(false);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form className="max-w-md mx-auto p-6 bg-blue-300 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Message Form</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {
            setname(e.target.value);
          }}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block font-medium mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => {
            setphone(e.target.value);
          }}
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => {
            setmessage(e.target.value);
          }}
          className="w-full px-3 py-2 border rounded"
          rows={4}
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default MessageForm;
