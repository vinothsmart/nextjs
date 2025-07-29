import Image from "next/image";

const LoadingState = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center space-y-6 p-8 bg-white rounded-lg shadow-lg">
        <Image
          src="/next.svg"
          alt="Loading"
          width={64}
          height={64}
          className="mb-2"
        />
        <div className="w-12 h-12 border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></div>
        <p className="text-xl text-gray-700 font-semibold">Loading...</p>
      </div>
    </div>
  );
};
export default LoadingState;
