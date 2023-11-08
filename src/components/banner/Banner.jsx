import Image from "next/image";
import Link from "next/link";
import avatar3 from "/public/images/avatar/6501a2740452f3f40e68388b_tm-3.webp";
import avatar1 from "/public/images/avatar/6501a2740452f3f40e68388d_tm-1.webp";
import avatar2 from "/public/images/avatar/6501a2740452f3f40e68388f_tm-2.webp";
import avatar4 from "/public/images/avatar/6501a2740452f3f40e683891_tm-4.webp";
const Banner = () => {
  return (
    <div>
      {/* banner content */}
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

        <p className="text-white max-w-xl mx-auto mt-8">
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
      </div>
    </div>
  );
};

export default Banner;
