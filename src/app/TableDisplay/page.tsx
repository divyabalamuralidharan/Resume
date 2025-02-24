"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const TableDisplay = () => {
  const searchParams = useSearchParams();

  const [details, setDetails] = useState({
    objective: searchParams.get("objective") || "N/A",
    name: searchParams.get("name") || "N/A",
    age: searchParams.get("age") || "N/A",
    email: searchParams.get("email") || "N/A",
    phoneNo: searchParams.get("phoneNo") || "N/A",
    gender: searchParams.get("gender") || "N/A",
    address: searchParams.get("address") || "N/A",
    sslcpercentage: searchParams.get("sslcper") || "N/A",
    schoolnamesslc: searchParams.get("sslcName") || "N/A",
    hslprecentage: searchParams.get("hslcper") || "N/A",
    schoolnamehsl: searchParams.get("hslName") || "N/A",
    clgpercentage: searchParams.get("clgpre") || "N/A",
    clgName: searchParams.get("clgName") || "N/A",
    skillsfilled: searchParams.get("skillsfilled") || "N/A",
    skilldescription: searchParams.get("skilldesc") || "N/A",
    experiencedescription: searchParams.get("expdesc") || "N/A",
    contactemail: searchParams.get("conemail") || "N/A",
    linkedin: searchParams.get("linkedin") || "N/A",
  });

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your table data will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setDetails({});
        Swal.fire("Deleted!", "Your data has been deleted.", "success");
      }
    });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">Resume Summary</h1>

      {Object.keys(details).length > 0 ? (
        <table className="w-full border-collapse border border-gray-300">
          <tbody>
            {Object.entries(details).map(([key, value]) => (
              <tr key={key} className="border-b">
                <td className="p-3 font-semibold capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </td>
                <td className="p-3">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500 mt-4">No data available.</p>
      )}

      {/* Button Container */}
      <div className="flex justify-between items-center mt-6">
        {/* Back Button */}
        <Link href="/Resume">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5">
            Back
          </button>
        </Link>

        {/* Action Buttons: Delete & Resume */}
        <div className="flex gap-3">
          <button
            onClick={handleDelete}
            className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5">
            Delete
          </button>
<Link href={"/"}>
          <button
            className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
            Resume
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TableDisplay;
