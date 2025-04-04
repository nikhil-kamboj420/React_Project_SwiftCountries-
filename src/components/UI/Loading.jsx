export const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] gap-5">
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 rounded-full border-8 border-t-transparent border-white animate-spin"></div>
      </div>
      <p className="font-semibold text-white  text-2xl ">Loading...</p>
    </div>
  );
};

export default Loading;
