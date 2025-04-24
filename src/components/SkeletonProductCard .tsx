const SkeletonProductCard = () => {
    return (
      <div className="w-[160px] sm:w-[200px] xl:w-[275px] bg-white rounded-xl p-2 shadow animate-pulse">
        {/* image */}
        <div className="w-full h-40 bg-gray-200 rounded-lg mb-2"></div>
  
        {/* title */}
        <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
  
        {/* price */}
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    );
  };
  
  export default SkeletonProductCard;