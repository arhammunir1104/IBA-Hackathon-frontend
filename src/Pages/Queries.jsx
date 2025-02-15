import PostForQuery from "../components/PostForQuery";

export default function Queries() {
  return (
    <div>
    <div className="flex w-full h-[calc(100vh-80px)] bg-white border-r border-gray-300 p-8">
        <h2 className="text-sm font-semibold text-green-500">Search Anything</h2>
        <input
          type="text"
          placeholder="Find your related work..."
          className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Main Content (Posts) */}
      <div className="w-[80vw] h-[calc(100vh-80px)] p-12">
        <PostForQuery />
      </div>
    </div>
  );
}
