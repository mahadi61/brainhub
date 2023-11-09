import Image from "next/image";

const BannerRight = () => {
  return (
    <>
      {" "}
      <div className="hidden md:block">
        <div className="flex flex-col gap-9 relative">
          <div></div>
          <Image
            src={
              "/images/technology/6501a2740452f3f40e683871_hp-h-planet-left-2.webp"
            }
            width={100}
            height={100}
            className="-ms-32"
            alt="technology"
          />
          <Image
            src={
              "/images/technology/6501a2740452f3f40e68387d_hp-h-planet-left-3.png"
            }
            width={100}
            height={100}
            alt="technology"
            className="rotate-180 "
          />
          <Image
            src={
              "/images/technology/6501a2740452f3f40e68387f_hp-h-planet-right-4.webp"
            }
            width={50}
            height={100}
            className="-ms-24"
            alt="technology"
          />
          <Image
            src={"/images/6501a2740452f3f40e683883_hp-h-stars-left.png"}
            width={700}
            height={700}
            className="absolute h-full animate-fade-in-out"
            alt="technology"
          />
        </div>
      </div>
    </>
  );
};

export default BannerRight;
