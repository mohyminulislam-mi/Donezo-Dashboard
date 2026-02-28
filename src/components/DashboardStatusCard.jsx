import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FiPlus, FiArrowUpRight } from "react-icons/fi";
import Reveal from "../components/common/Reveal";
import Loading from "../components/common/Loading";

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

  if (isLoading) return <Loading />;

  const stats = [
    {
      title: "Revenue",
      value: `$${((data?.revenue || 0) / 1000).toFixed(1)}K`,
      isGreen: true,
      description: "Increase from last months",
    },
    {
      title: "Total Users",
      value: `${((data?.totalUsers || 0) / 1000).toFixed(1)}K`,
      description: "Increase from last months",
    },
    {
      title: "Active Users",
      value: `${((data?.activeUsers || 0) / 1000).toFixed(1)}K`,
      description: "Increase from last months",
    },
    {
      title: "Total Growth",
      value: data?.growth + "%",
      description: "Increase from last months",
    },
  ];

  return (
    <div className="px-1 py-5">
      {/* import header  */}
      <div className="flex flex-col lg:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1">
            Plan, prioritize, and accomplish your tasks with ease.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-[#14532d] text-white px-5 py-2.5 rounded-full font-medium cursor-pointer hover:scale-101 transition-all">
            <FiPlus /> Add Project
          </button>
          <button className="border border-gray-300 px-5 py-2.5  rounded-full font-medium hover:bg-[#14532d] hover:text-white transition-all cursor-pointer hover:scale-101 transition-all">
            Import Data
          </button>
        </div>
      </div>
      {/* data card  */}
      <Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className={`mt-3 p-6 rounded-3xl relative transform transition-all group cursor-pointer duration-700 hover:scale-101 hover:-translate-y-3 ${
                item.isGreen
                  ? "bg-linear-to-br from-[#076141] via-[#006442] to-[#023523] text-white"
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
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default DashboardStatusCard;
