import React, { useState, useMemo, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";

export default function Enquiries() {
  const [search, setSearch] = useState("");
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination states
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // fixed per page
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  // Fetch enquiries from backend with pagination
  useEffect(() => {
    const fetchEnquiries = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://amravatigroup.in/get_enquiries.php?page=${page}&limit=${limit}`
        );
        const result = await res.json();
        if (result.success) {
          setEnquiries(result.data);
          setTotalPages(result.totalPages);
          setTotal(result.total);
        }
      } catch (error) {
        console.error("Error fetching enquiries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiries();
  }, [page, limit]);

  // Total and monthly enquiries (from backend total count and filtered data)
  const totalEnquiries = total;
  const currentMonth = new Date().getMonth();
  const enquiriesThisMonth = enquiries.filter(
    (e) => new Date(e.date).getMonth() === currentMonth
  ).length;

  // Filtered data based on search (applied on current page data only)
  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((enquiry) =>
      [enquiry.name, enquiry.email, enquiry.subject].some((field) =>
        field?.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, enquiries]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6 accentfont"
    >
      <h1 className="text-3xl font-bold accentfont bgcolorfont">Enquiries</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 border">
          <h3 className="accentfont">Total Enquiries</h3>
          <p className="text-2xl font-bold accentfont">{totalEnquiries}</p>
        </div>
        <div className="p-4 border">
          <h3 className="accentfont">Enquiries This Month</h3>
          <p className="text-2xl font-bold accentfont">{enquiriesThisMonth}</p>
        </div>
      </div>

      {/* Search Box */}
      <div className="flex justify-start items-center gap-2 bgcolorfont border w-fit pl-4 pr-1 py-1 border-gray-300">
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
        {loading ? (
          <p className="text-center py-6">Loading enquiries...</p>
        ) : (
          <table className="w-full text-left accentfont table-auto">
            <thead className="themebg accentfont">
              <tr>
                <th className="px-4 py-4 accentfont">#</th>
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
                  <tr key={index} className="border-b border-gray-300">
                    <td className="px-4 py-4 accentfont">
                      {(page - 1) * limit + index + 1}
                    </td>
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
                  <td
                    colSpan="8"
                    className="px-4 py-6 text-center text-gray-500"
                  >
                    No enquiries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-end items-center gap-4 mt-6">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          className={`px-4 py-2 border ${
            page === 1
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          Previous
        </button>

        <span className="accentfont">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          className={`px-4 py-2 border ${
            page === totalPages
              ? "text-gray-400 border-gray-300 cursor-not-allowed"
              : "hover:bg-gray-100"
          }`}
        >
          Next
        </button>
      </div>
    </motion.div>
  );
}
