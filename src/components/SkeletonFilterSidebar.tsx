const SkeletonFilterSidebar = () => {
    return (
      <div className="hidden lg:block w-1/4 border shadow-md h-[650px] sticky top-20 py-4 px-7 rounded-md overflow-x-scroll animate-pulse">
        {/* search */}
        <div className="text-center mb-4">
          <div className="h-8 bg-gray-200 rounded-md w-full"></div>
        </div>
  
        {/* categories */}
        <div className="space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          {[...Array(7)].map((_, i) => (
            <div key={i} className="flex items-center gap-x-2">
              <div className="w-4 h-4 bg-gray-200 rounded"></div>
              <div className="h-3 bg-gray-200 rounded w-24"></div>
            </div>
          ))}
        </div>
  
        {/* price */}
        <div className="mt-5 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-8 bg-gray-200 rounded w-full"></div>
        </div>
  
        {/* button */}
        <div className="mt-4">
          <div className="h-8 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    );
  };
  
  export default SkeletonFilterSidebar;
  