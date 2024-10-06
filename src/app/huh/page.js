"use client";
import { useState } from "react";

const CompanyFormPage = () => {
  const [companyName, setCompanyName] = useState("");
  const [industry, setIndustry] = useState("");
  const [startDate, setStartDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const companyData = {
      companyName,
      industry,
      startDate,
    };
    console.log(companyData);
    try {
      const response = await fetch('/api/companies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(companyData),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Success message
        // Optionally, reset form fields
        setCompanyName('');
        setIndustry('');
        setStartDate('');
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData.error);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };  

  return (
    <div
    className="flex justify-center items-center h-screen bg-gray-100" 
    style={{ backgroundColor: '#141726' }}  // Inline style for custom background color
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Company Info</h2>

        <div className="mb-4">
          <label
            htmlFor="companyName"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter company name"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="industry"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Industry
          </label>
          <input
            type="text"
            id="industry"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            placeholder="Enter industry"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Company Start Date
          </label>
          <input
            type="date"
            id="startDate"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompanyFormPage;
