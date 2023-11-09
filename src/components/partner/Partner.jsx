import Image from "next/image";

const Partner = () => {
  return (
    <>
      <div className="my-11 bg-[url('/images/shape.webp')] bg-cover bg-center pt-60 pb-28 z-50">
        <p className="text-sm text-white text-center">
          Brainhub is a software engineering agency trusted by 80+ US & European
          startups, scale-ups & enterprises.
        </p>
        <div className="flex justify-evenly">
          {/* all partner */}
          <Image
            src={"/images/partner/pwe.webp"}
            width={200}
            height={100}
            alt="Partner"
          />
          <Image
            src={"/images/partner/credit-suisse.webp"}
            width={200}
            height={100}
            alt="Partner"
          />
          <Image
            src={"/images/partner/beam.webp"}
            width={200}
            height={100}
            alt="Partner"
          />
          <Image
            src={"/images/partner/national.webp"}
            width={200}
            height={100}
            alt="Partner"
          />
          <Image
            src={"/images/partner/paradox.webp"}
            width={200}
            height={100}
            alt="Partner"
          />
        </div>
      </div>
    </>
  );
};

export default Partner;
