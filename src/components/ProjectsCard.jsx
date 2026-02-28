import React from "react";
import { useQuery } from "@tanstack/react-query";
import { LuShoppingCart } from "react-icons/lu";

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
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold">Products</h3>
        <button className="text-xs border border-gray-300 px-2 py-1 rounded-md font-bold text-gray-600 cursor-pointer">
          + New
        </button>
      </div>
      <div className="space-y-4">
        {products?.slice(0, 5).map((p, i) => (
          <div key={p.id} className="flex items-center gap-3">
            <div
              className={`p-2 rounded-lg ${i % 2 === 0 ? "bg-blue-100 text-blue-600" : "bg-orange-100 text-orange-600"}`}
            >
              <LuShoppingCart size={14} />
            </div>
            <div>
              <p className="text-xs font-bold">{p.name}</p>
              <p className="text-xs text-gray-400">
                Sales: ({p.sales}) ${p.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
