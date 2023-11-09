"use client";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import BannerContent from "./BannerContent";
import BannerLeft from "./BannerLeft";
import BannerRight from "./BannerRight";
const Banner = () => {
  return (
    <div className="flex justify-between items-end w-full">
      {/* banner left */}
      <BannerLeft
        MouseParallaxChild={MouseParallaxChild}
        MouseParallaxContainer={MouseParallaxContainer}
      />
      {/* banner content */}
      <BannerContent />
      {/* banner right */}
      <BannerRight />
    </div>
  );
};

export default Banner;
