import Link from "next/link";

const BlogFooter = () => {
  return (
    <div className=" md:w-3/6 mx-auto text-center text-white mt-14">
      <p className="md:text-xl  mb-10">
        We wish we could show you all the work we've done. Unfortunately, we're
        often bound by the non-disclosure agreements.
      </p>
      <Link
        href="https://brainhub.eu/portfolio"
        className="border-b-[1px] hover:border-b-2 border-[#4c4c4c] text-white font-semibold uppercase pb-1 hover:border-white flex w-80 items-center justify-between mx-auto"
      >
        SEE MORE PROJECTS WE CAN REVEAL
        <svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6406 5.03906L7.26562 8.41406L6.75 8.95312L5.67188 7.875L6.21094 7.35938L8.29688 5.25H1.5H0.75V3.75H1.5H8.29688L6.21094 1.66406L5.67188 1.125L6.75 0.0703125L7.26562 0.609375L10.6406 3.98438L11.1797 4.5L10.6406 5.03906Z"
            fill="CurrentColor"
          ></path>
        </svg>
      </Link>
    </div>
  );
};

export default BlogFooter;
