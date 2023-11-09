import Image from "next/image";
import Link from "next/link";
import avatar3 from "/public/images/avatar/6501a2740452f3f40e68388b_tm-3.webp";
import avatar1 from "/public/images/avatar/6501a2740452f3f40e68388d_tm-1.webp";
import avatar2 from "/public/images/avatar/6501a2740452f3f40e68388f_tm-2.webp";
import avatar4 from "/public/images/avatar/6501a2740452f3f40e683891_tm-4.webp";

const BannerContent = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-white text-5xl font-semibold mb-2">
          High-performing teams of
        </h1>
        <h1 className="primary-color text-5xl font-semibold">
          vetted software engineers.
        </h1>
        {/* banner content people image */}
        <div className="text-white flex items-end justify-center my-8 gap-3">
          <h1 className="text-7xl font-medium">[</h1>
          <Image src={avatar1} width={72} height={73} alt="Photo" />
          <p className="text-6xl font-medium">,</p>
          <Image src={avatar2} width={72} height={73} alt="Photo" />
          <p className="text-6xl font-medium">,</p>
          <Image src={avatar3} width={72} height={73} alt="Photo" />
          <p className="text-6xl font-medium">,</p>
          <Image src={avatar4} width={72} height={73} alt="Photo" />
          <h1 className="text-7xl font-medium">]</h1>
        </div>

        <p className="text-white max-w-xl mx-auto mt-8 mb-16">
          Scale your team up and down with the{" "}
          <Link
            href="https://brainhub.eu/top-talent"
            className="hover:bg-[#49FFE6] hover:text-black"
          >
            top 1.36% talent
          </Link>{" "}
          skilled in React, Node.js, .NET and AWS. Onboarding within 10 days
          guaranteed.
        </p>

        {/* banner button */}
        <Link
          href={"https://brainhub.eu/contact"}
          className="inline-block px-9 py-3 text-black font-bold  hover:bg-[#60e1d0] bg-[#49FFE6] uppercase "
        >
          <p className="flex gap-4 ">
            Get a proposal
            <Image
              src={"/images/right-arrow.png"}
              width={25}
              height={15}
              alt="right arrow"
            />
          </p>
        </Link>

        <p className="flex justify-center items-end gap-1 mt-8 text-white ">
          <span className="text-2xl">Clutch</span>{" "}
          <span className="text-sm">4.9</span>{" "}
          {[1, 2, 3, 4, 5].map((a) => (
            <Image
              key={a}
              src={"/images/icons8-rating-50.png"}
              width={20}
              height={0}
              alt="star"
            />
          ))}
        </p>
      </div>
    </>
  );
};

export default BannerContent;
