"use client";
import BannerContent from "./BannerContent";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";
const Banner = () => {
  return (
    <div className="flex justify-between items-end w-full">
      {/* banner left */}
      <BannerLeft />
      {/* banner content */}
      <BannerContent />
      {/* banner right */}
      <BannerRight />
    </div>
  );
};

export default Banner;
