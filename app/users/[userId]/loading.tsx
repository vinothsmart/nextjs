const LoadingState = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-blue-400 rounded-full animate-spin border-t-transparent"></div>
        <p className="text-xl text-gray-700 font-semibold">Loading...</p>
      </div>
    </div>
  );
};
export default LoadingState;
