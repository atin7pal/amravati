import React, { useState, useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";

// Example dummy data
const dummyEnquiries = [
  {
    name: "Atin Sharma",
    email: "atin@example.com",
    phone: "9876543210",
    city: "Mumbai",
    state: "Maharashtra",
    subject: "Project Inquiry",
    query: "Looking for more info on Project A",
    date: "2025-08-01",
  },
  {
    name: "Priya Desai",
    email: "priya@example.com",
    phone: "9123456780",
    city: "Pune",
    state: "Maharashtra",
    subject: "Pricing",
    query: "What is the price for 2BHK?",
    date: "2025-07-20",
  },
  // Add more objects here...
];

export default function Enquiries() {
  const [search, setSearch] = useState("");

  // Total and monthly enquiries
  const totalEnquiries = dummyEnquiries.length;
  const currentMonth = new Date().getMonth();
  const enquiriesThisMonth = dummyEnquiries.filter(
    (e) => new Date(e.date).getMonth() === currentMonth
  ).length;

  // Filtered data based on search
  const filteredEnquiries = useMemo(() => {
    return dummyEnquiries.filter((enquiry) =>
      [enquiry.name, enquiry.email, enquiry.subject].some((field) =>
        field.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);

  return (
    <motion.div 
     initial = {{opacity :0}}
     animate = {{opacity : 1}}
    className="space-y-6 accentfont">
      <h1 className="text-2xl font-bold accentfont bgcolorfont">
        Enquiries Dashboard
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 themebg">
          <h3 className="accentfont">Total Enquiries</h3>
          <p className="text-2xl font-bold accentfont">{totalEnquiries}</p>
        </div>
        <div className="p-4 themebg">
          <h3 className="accentfont">Enquiries This Month</h3>
          <p className="text-2xl font-bold accentfont">{enquiriesThisMonth}</p>
        </div>
      </div>

      {/* Search Box */}
      <div className="flex justify-start items-center gap-2 bgcolorfont border w-fit pl-4 pr-1 py-1 border-gray-300 focus:ring-gray-300 ring-gray-200 outline-gray-300">
        <BiSearch />
        <input
          type="text"
          placeholder="Search by name, email or subject"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 w-full accentfont"
        />
      </div>

      {/* Enquiry Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left accentfont table-auto">
          <thead className="themebg accentfont">
            <tr>
              <th className="px-4 py-4 accentfont">Name</th>
              <th className="px-4 py-4 accentfont">Email</th>
              <th className="px-4 py-4 accentfont">Phone</th>
              <th className="px-4 py-4 accentfont">City</th>
              <th className="px-4 py-4 accentfont">State</th>
              <th className="px-4 py-4 accentfont">Subject</th>
              <th className="px-4 py-4 accentfont">Query</th>
            </tr>
          </thead>
          <tbody>
            {filteredEnquiries.length > 0 ? (
              filteredEnquiries.map((enquiry, index) => (
                <tr key={index} className="border-b border-gray-300 ">
                  <td className="px-4 py-4 accentfont">{enquiry.name}</td>
                  <td className="px-4 py-4 accentfont">{enquiry.email}</td>
                  <td className="px-4 py-4 accentfont">{enquiry.phone}</td>
                  <td className="px-4 py-4 accentfont">{enquiry.city}</td>
                  <td className="px-4 py-4 accentfont">{enquiry.state}</td>
                  <td className="px-4 py-4 accentfont">{enquiry.subject}</td>
                  <td className="px-4 py-4 accentfont">{enquiry.query}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="px-4 py-6 text-center text-gray-500">
                  No enquiries found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
