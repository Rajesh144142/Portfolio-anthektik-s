import React, { useState } from "react";
import {useNavigate }from 'react-router-dom'
// import { baseUrl } from "../utils/constant";
// import axios from "axios";
// import { isLogin } from "../utils/auth";
import {logOut} from '../utils/auth'
const Admin = () => {
  const navigate=useNavigate()
  // Define state variables to store input values
  const [formData, setFormData] = useState({
    projectName: "",
    description: "",
    liveLink: "",
    githubLink: "",
  });

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Event handler for the submit button
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Log the input values
  // axios.post(`${baseUrl}auth/authToken`).

    // You can do further processing or submit the data to a backend here
  };
  const Handlelogout=()=>{
    navigate('../anthektikós')
    logOut();
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">
            Add Your New Project{" "}
          </h2>
          <p className="text-gray-500 mb-6">
            Remember Always try to learn new things as it's a part of your
            journey
          </p>

          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
              <div className="text-gray-600">
                <p className="font-medium text-lg">Project Details</p>
                <p>Please fill out all the fields.</p>
              </div>

              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit}>
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="projectName">Project Name</label>
                      <input
                        type="text"
                        name="projectName"
                        id="projectName"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.projectName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="description">Description</label>
                      <input
                        type="text"
                        name="description"
                        id="description"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.description}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="liveLink">Live Link</label>
                      <input
                        type="text"
                        name="liveLink"
                        id="liveLink"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.liveLink}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="md:col-span-5">
                      <label htmlFor="githubLink">GitHub Repository</label>
                      <input
                        type="text"
                        name="githubLink"
                        id="githubLink"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={formData.githubLink}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="md:col-span-5 ">
                      <div className="my-3">
                        <input type="file" />
                      </div>
                      <div className="my-3">
                        <input type="file" />
                      </div>
                      <div className="my-3">
                        <input type="file" />
                      </div>
                    </div>
                    {/* ... Other input fields ... */}

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0" onClick={Handlelogout}>
        logout
      </div>
    </div>
  );
};

export default Admin;
