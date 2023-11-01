import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiLogout } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/authenticationSlice";
import { insertProjects } from "../../features/projectSlice";

const Admin = () => {
  const { user, loading, error } = useSelector((state) => state.user);
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [image1, setImageData1] = useState(null);
  const [image2, setImageData2] = useState(null);
  const [image3, setImageData3] = useState(null);
  const initialFormData = {
    projectName: "",
    description: "",
    liveLink: "",
    githubLink: "",
    image1: null,
    image2: null,
    image3: null,
  };
  const [formData, setFormData] = useState(initialFormData);
  const handleImageChange = (e, setImageData, imageField) => {
    const { files } = e.target;
    const reader = new FileReader();

    if (files.length > 0) {
      const selectedFile = files[0];
      reader.readAsDataURL(selectedFile);

      reader.onload = () => {
        setImageData(reader.result);
        setFormData((prevData) => ({
          ...prevData,
          [imageField]: reader.result, // Update the corresponding image field in formData
        }));
      };
      reader.onerror = (error) => {
        console.log("Error", error);
      };
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleReset = () => {
    setFormData(initialFormData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispath(insertProjects(formData))
      .then((response) => {
        console.log("New Project Added....");
        handleReset();
        navigate("/Admin");
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  const Handlelogout = () => {
    dispath(logout(user.email));
    navigate("../anthektikós");
  };
  if (loading) {
    return <h1 className="text-center text-2xl font-bold ">Loading...</h1>;
  }
  if (error != null) {
    return <h1>error</h1>;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
      <div className="container max-w-screen-lg mx-auto ">
        <div>
          <h2 className="font-semibold text-xl text-gray-600">
            Add Your New Project
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
                    <div className="md:col-span-3 gap-[20px]">
                      <input
                        type="file"
                        name="image1"
                        className="mt-1"
                        onChange={(e) =>
                          handleImageChange(e, setImageData1, "image1")
                        }
                      />
                      <input
                        type="file"
                        name="image2"
                        className="mt-1"
                        onChange={(e) =>
                          handleImageChange(e, setImageData2, "image2")
                        }
                      />
                      <input
                        type="file"
                        name="image3"
                        className="mt-1"
                        onChange={(e) =>
                          handleImageChange(e, setImageData3, "image3")
                        }
                      />
                    </div>

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          type="submit"
                        >
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
      <div
        className="absolute top-32  right-8 md:right-auto md:top-2 btn btn-outline btn-success btn-sm"
        onClick={Handlelogout}
      >
        <span className="block md:hidden">
          <CiLogout />
        </span>{" "}
        <span className="hidden md:block">logout</span>
      </div>

      {/* <div className="absolute">
        {image1 && <img src={image1} alt="Image 1" />}
        {image2 && <img src={image2} alt="Image 2" />}
        {image3 && <img src={image3} alt="Image 3" />}
      </div> */}
    </div>
  );
};

export default Admin;
