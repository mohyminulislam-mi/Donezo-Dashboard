import React from "react";
import { useQuery } from "@tanstack/react-query";
import Reveal from "../components/common/Reveal";

const TeamCollaboration = () => {
  const { data: users } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(
        "https://task-api-eight-flax.vercel.app/api/users",
      );
      return response.json();
    },
  });

  return (
    <Reveal>
      <div className="lg:col-span-4 bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold">Team Collaboration</h3>
          <button className="text-xs border border-gray-300 px-2 py-1 rounded-md font-bold text-gray-600 cursor-pointer">
            + Add Member
          </button>
        </div>
        <div className="space-y-5">
          {users?.slice(0, 4).map((user, i) => (
            <div key={user.id} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden">
                <img
                  src={`https://i.pravatar.cc/150?u=${user.id}`}
                  alt="avatar"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">{user.name}</p>
                <p className="text-xs text-gray-400">
                  Working on GitHub Repository
                </p>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded ${i === 0 ? "bg-green-50 text-green-600" : i === 2 ? "bg-red-50 text-red-500" : "bg-orange-50 text-orange-500"}`}
              >
                {i === 0 ? "Completed" : i === 2 ? "Pending" : "In Progress"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default TeamCollaboration;
