export default function NoDataHandler({name = "data"}) {
  return (
    <div className="flex min-h-75 flex-col items-center justify-center rounded-2xl border border-dashed bg-gray-50 p-8">
      <h2 className="text-2xl font-semibold text-gray-700">
        No {name} found
      </h2>

      <p className="mt-2 text-center text-gray-500">
        There are currently no {name.toLowerCase()} available.
      </p>
    </div>
  );
}