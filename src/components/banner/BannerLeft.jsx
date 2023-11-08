import Image from "next/image";

const BannerLeft = () => {
  return (
    <>
      <div className="flex flex-col gap-9 relative">
        <Image
          src={
            "/images/technology/6501a2740452f3f40e683873_hp-h-planet-left-1.png"
          }
          width={100}
          height={100}
          alt="technology"
        />
        <Image
          src={
            "/images/technology/6501a2740452f3f40e683871_hp-h-planet-left-2.webp"
          }
          width={100}
          height={100}
          alt="technology"
        />
        <Image
          src={
            "/images/technology/6501a2740452f3f40e68387d_hp-h-planet-left-3.png"
          }
          width={100}
          height={100}
          alt="technology"
          className="-ms-16"
        />
        <Image
          src={
            "/images/technology/6501a2740452f3f40e68387b_hp-h-planet-left-4.png"
          }
          width={100}
          height={100}
          className=""
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
    </>
  );
};

export default BannerLeft;
