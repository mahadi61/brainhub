import BlogCard from "./BlogCard";
import BlogFooter from "./BlogFooter";
import BlogHeader from "./BlogHeader";

const Blogs = () => {
  return (
    <div className=" w-11/12 mx-auto py-28">
      <BlogHeader />
      {/* blog post section */}
      <div className="grid grid-cols-2 gap-y-10 my-20">
        {/* card 1 */}

        <BlogCard
          cardImage="/images/projectThumbnail/cocong.webp"
          width={500}
          cardMaxWidth="max-w-lg"
          cardTitle="CUSTOM SOFTWARE DEVELOPMENT"
          cardHeading=" Resilient software architecture helps a Swiss fintech get funded and
          scale quickly"
          description=" GOKONG’s key challenge was to create an architecture that will
          withstand heavy data flows with no compromises on a security side."
        />
        {/* card 2 */}
        <div className="justify-self-end">
          <BlogCard
            cardImage="/images/projectThumbnail/national.webp"
            width={400}
            cardMaxWidth="max-w-sm"
            cardTitle="WEB APP MODERNIZATION"
            cardHeading="Speeding up a software delivery process by... 450%"
            description="National Geographic asked us to reinvent a subscription management system serving over 6 million users and connect it to a custom-made ERP."
          />
        </div>
        {/* card 3 */}

        <div className="self-end">
          <BlogCard
            cardImage="/images/projectThumbnail/paradox-laptop.webp"
            width={400}
            cardMaxWidth="max-w-sm"
            cardTitle="DESKTOP APP DEVELOPMENT"
            cardHeading="Team augmentation setup that lasts for 6+ years (and counting)"
            description="Paradox Interactive needed to rebuild their desktop app launcher, serving as a digital distribution platform."
          />
        </div>
        {/* card 4 */}

        <div className="justify-self-end">
          <BlogCard
            cardImage="/images/projectThumbnail/mobile.webp"
            width={500}
            cardMaxWidth="max-w-lg"
            cardTitle="MOBILE APP DEVELOPMENT"
            cardHeading="Sequoia-funded startup builds the most popular micromobility app in Asia"
            description="After raising $6.4m, Beam’s plan was to fight Hive and Lime for market share in Asia-Pacific region. Our job was to make the app their biggest weapon."
          />
        </div>
      </div>
      <BlogFooter />
    </div>
  );
};

export default Blogs;
