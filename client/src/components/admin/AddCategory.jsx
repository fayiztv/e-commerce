export default function AddCategory() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8">
        <h2 className="mb-6 text-2xl font-bold">Add Category</h2>

        <form className="space-y-5">
          <div>
            <label className="mb-2 block">Name</label>

            <input
              className="w-full rounded-lg border px-4 py-3 outline-none"
              type="text"
              placeholder="Category name"
            />
          </div>

          <div>
            <label className="mb-2 block">Description</label>

            <textarea
              className="w-full rounded-lg border px-4 py-3 outline-none"
              rows="4"
            />
          </div>

          <div>
            <label className="mb-2 block">Status</label>

            <select className="w-full rounded-lg border px-4 py-3">
              <option value={true}>Active</option>

              <option value={false}>Inactive</option>
            </select>
          </div>

          <div className="flex justify-end gap-4">
            <button className="rounded-lg border px-6 py-3">Cancel</button>

            <button className="rounded-lg bg-black px-6 py-3 text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
