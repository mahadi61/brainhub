import Image from "next/image";

const BlogCard = ({
  width,
  cardMaxWidth,
  cardImage,
  cardTitle,
  cardHeading,
  description,
}) => {
  return (
    <div className={cardMaxWidth}>
      {/* card image */}
      <Image src={cardImage} width={width} height={400} alt="card image" />
      {/* card content */}
      <div className="text-white mt-5">
        <p className="#777779">{cardTitle}</p>
        <h1 className="text-2xl font-semibold my-4">{cardHeading}</h1>
        <p>{description}</p>

        <p className="border-b-[1px] hover:border-b-2 border-[#4c4c4c] text-white font-semibold uppercase pb-1 hover:border-white flex w-32 items-center justify-between mt-10">
          Read more
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
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
