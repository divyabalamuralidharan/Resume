"use client";
import Link from "next/link";
import { useState } from "react";

type StateValues = {
  [key: string] : string
}
const ResumeDetails = () => { // useState<Partial<DetailsType>>({});
  const [details, setDetails] = useState<Partial<StateValues>>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("details", details);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6"> 
      <h1 className="text-2xl font-bold text-gray-800">Resume Details</h1>
      
      <div>
        <h2 className="text-xl font-semibold">Objective</h2>
        <textarea
          name="objective"
          value={details?.objective}
          placeholder="Write your objective..."
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 "
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Name" name="name" value={details.name} onChange={handleChange} className="input-field" />
        <input type="number" placeholder="Age" name="age" value={details.age} onChange={handleChange} className="input-field" />
        <input type="email" placeholder="Email" name="email" value={details.email} onChange={handleChange} className="input-field" />
        <input type="number" placeholder="Phone No" name="phoneNo" value={details.phoneNo} onChange={handleChange} className="input-field" />
      </div>

      <div className="flex gap-4">
        <label className="flex items-center">
          <input type="radio" name="gender" value="Male" checked={details.gender === "Male"} onChange={handleChange} className="mr-2" /> Male
        </label>
        <label className="flex items-center">
          <input type="radio" name="gender" value="Female" checked={details.gender === "Female"} onChange={handleChange} className="mr-2" /> Female
        </label>
      </div>
      
      <input type="text" placeholder="Address" name="address" value={details.address} onChange={handleChange} className="input-field" />
      
      <h2 className="text-xl font-semibold">Education</h2>
      <div className="grid grid-cols-2 gap-4">
        <input type="number" placeholder="10th Percentage" name="sslcper" value={details.sslcper} onChange={handleChange} className="input-field" />
        <input type="text" placeholder="10th School Name" name="sslcName" value={details.sslcName} onChange={handleChange} className="input-field" />
        <input type="number" placeholder="12th Percentage" name="hslcper" value={details.hslcper} onChange={handleChange} className="input-field" />
        <input type="text" placeholder="12th School Name" name="hslName" value={details.hslName} onChange={handleChange} className="input-field" />
        <input type="number" placeholder="College Percentage" name="clgpre" value={details.clgpre} onChange={handleChange} className="input-field" />
        <input type="text" placeholder="College Name" name="clgName" value={details.clgName} onChange={handleChange} className="input-field" />
      </div>

      <h2 className="text-xl font-semibold">Skills & Experience</h2>
      <div className="flex gap-4">
        <label className="flex items-center">
          <input type="radio" name="skillsfilled" value="IT" checked={details.skillsfilled === "IT"} onChange={handleChange} className="mr-2" /> IT
        </label>
        <label className="flex items-center">
          <input type="radio" name="skillsfilled" value="Non-IT" checked={details.skillsfilled === "Non-IT"} onChange={handleChange} className="mr-2" /> Non-IT
        </label>
      </div>
      
      <input type="text" placeholder="Describe your skills" name="skilldesc" value={details.skilldesc} onChange={handleChange} className="input-field" />
      
      <select name="exprencefield" value={details.exprencefield} onChange={handleChange} className="input-field">
        <option value="">Select Experience</option>
        <option value="0">0 Years</option>
        <option value="1">1 Year</option>
        <option value="2">2 Years</option>
        <option value="3">3 Years</option>
        <option value="5">5 Years</option>
        <option value="10">10+ Years</option>
      </select>
      
      <textarea name="expdesc" placeholder="Experience Details" value={details.expdesc} onChange={handleChange} className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300"></textarea>
      
      <h2 className="text-xl font-semibold">Contact</h2>
      <div className="grid grid-cols-2 gap-4">
        <input type="email" placeholder="Email" name="conemail" value={details.conemail} onChange={handleChange} className="input-field" />
        <input type="text" placeholder="LinkedIn Profile Link" name="linkedin" value={details.linkedin} onChange={handleChange} className="input-field" />
      </div>
      <div className="flex justify-end">
<Link  href={{
    pathname: "/TableDisplay",
    query: details,  // Passing details as query parameters
  }}>
      <button onClick={handleSubmit} className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700">Submit</button>
      </Link>
      </div>
    </div>
  );
};

export default ResumeDetails;






