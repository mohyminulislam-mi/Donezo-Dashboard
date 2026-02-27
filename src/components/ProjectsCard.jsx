import React from "react";
import { useQuery } from "@tanstack/react-query";
import { BsPlayCircleFill } from "react-icons/bs";

const ProjectsCard = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch(
        "https://task-api-eight-flax.vercel.app/api/products",
      );
      return response.json();
    },
  });

  return (
    <div className="bg-white p-6 rounded-[30px] shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Project</h3>
        <button className="text-xs font-bold text-gray-500">+ New</button>
      </div>
      <div className="space-y-4">
        {products?.slice(0, 5).map((p, i) => (
          <div key={p.id} className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg ${i % 2 === 0 ? "bg-blue-100 text-blue-600" : "bg-orange-100 text-orange-600"}`}
            >
              <BsPlayCircleFill size={14} />
            </div>
            <div>
              <p className="text-xs font-bold">{p.name}</p>
              <p className="text-[9px] text-gray-400">Due date: Nov 26, 2024</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
