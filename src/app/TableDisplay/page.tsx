"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const TableDisplay = () => {
  const [details, setDetails] = useState({});

  useEffect(() => {
    // Fetching data from local storage to populate table
    const storedData = localStorage.getItem("resumeData");
    if (storedData) {
      setDetails(JSON.parse(storedData));
    }
  }, []);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your resume data will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("resumeData"); // Clearing local storage
        setDetails({});
        Swal.fire("Deleted!", "Your data has been reset.", "success");
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Resume Summary</h1>

      {/* Display Resume Data */}
      <table className="w-full border-collapse border border-gray-300">
        <tbody>
          {Object.entries(details).length ? (
            Object.entries(details).map(([key, value]) => (
              <tr key={key} className="border-b">
                <td className="p-3 font-semibold capitalize">{key.replace(/([a-z])([A-Z])/g, "$1 $2")}</td>
                <td className="p-3">{value}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" className="text-center p-3">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-6">
        <Link href="/Resume">
          <button className="text-white bg-green-500 hover:bg-green-600 font-medium rounded-lg text-sm px-5 py-2.5">Back</button>
        </Link>
        <button onClick={handleDelete} className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5">Delete</button>
      </div>
    </div>
  );
};
export default TableDisplay;
