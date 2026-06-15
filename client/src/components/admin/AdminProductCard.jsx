import { useNavigate } from "react-router-dom";

export default function AdminProductCard() {
  const navigate = useNavigate();
  function handleEditClick() {
    navigate(`:id`);
  }
  return (
    <div onClick={handleEditClick}>
      {/* Image */}
      <div className="h-64 bg-gray-200"></div>

      {/* Content */}
      <div className="space-y-4 p-5">
        <div>
          <h2 className="text-xl font-bold">iPhone 16 Pro Max</h2>

          <p className="text-gray-500">Electronics</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-bold">₹1,49,999</span>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-600">
            Active
          </span>
        </div>

        <div className="text-gray-500">Stock: 12</div>

        <div className="flex gap-3">
          <button
            onClick={handleEditClick}
            className="
                    flex-1
                    rounded-lg
                    bg-blue-500
                    py-3
                    text-white
                    transition
                    hover:bg-blue-600
                  "
          >
            Edit
          </button>

          <button
            className="
                    flex-1
                    rounded-lg
                    bg-red-500
                    py-3
                    text-white
                    transition
                    hover:bg-red-600
                  "
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
