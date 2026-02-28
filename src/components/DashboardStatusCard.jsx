import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FiPlus, FiArrowUpRight } from "react-icons/fi";

const DashboardStatusCard = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["overviewData"],
    queryFn: async () => {
      const response = await fetch(
        "https://task-api-eight-flax.vercel.app/api/overview",
      );
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    },
  });

  if (isLoading)
    return <div className="p-10 text-center font-bold">Loading...</div>;

  const stats = [
    {
      title: "Revenue",
      value: `$${((data?.revenue || 0) / 1000).toFixed(1)}K`,
      isGreen: true,
    },
    {
      title: "Total Users",
      value: `${((data?.totalUsers || 0) / 1000).toFixed(1)}K`,
    },
    {
      title: "Active Users",
      value: `${((data?.activeUsers || 0) / 1000).toFixed(1)}K`,
    },
    {
      title: "Total Growth",
      value: data?.growth + "%",
    },
  ];

  return (
    <div className="px-1 py-5">
      {/* import header  */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-[#14532d] text-white p-2.5 md:px-5 md:py-2.5 rounded-full font-medium hover:bg-green-900 transition-all cursor-pointer">
            <FiPlus /> Add Project
          </button>
          <button className="border border-gray-300 p-2.5 md:px-5 md:py-2.5  rounded-full font-medium hover:bg-gray-100 transition-all cursor-pointer">
            Import Data
          </button>
        </div>
      </div>

      {/* data card  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-3xl relative transition-all shadow-sm ${
              item.isGreen
                ? "bg-gradient-to-br from-[#14532d] to-[#22c55e] text-white"
                : "bg-white text-gray-900 border border-gray-100"
            }`}
          >
            <div
              className={`absolute top-5 right-5 w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer ${item.isGreen ? "bg-white border-white text-black" : "border-black"}`}
            >
              <FiArrowUpRight size={18} />
            </div>

            <p
              className={`text-sm font-medium ${item.isGreen ? "text-green-100" : "text-gray-500"}`}
            >
              {item.title}
            </p>
            <h2 className="text-4xl font-bold my-4">{item.value}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardStatusCard;
