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
      <div className="lg:col-span-4 bg-white p-6 rounded-3xl">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold">Users Collaboration</h3>
          <button className="text-xs border border-gray-300 px-2 py-1 rounded-md font-bold text-gray-600 cursor-pointer">
            + Add User
          </button>
        </div>
        <div className="space-y-1 cursor-pointer">
          {users?.slice(0, 4).map((user) => (
            <div key={user.id} className="flex items-center p-2 rounded-2xl gap-3 hover:bg-gray-100 ">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center overflow-hidden">
                <img
                  src={`https://i.pravatar.cc/150?u=${user.id}`}
                  alt="avatar"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">{user.name}</p>
                <p className="text-xs text-gray-400">
                  {user.email}
                </p>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded ${user.status === "active" ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"}`}
              >
                {user.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
};

export default TeamCollaboration;
