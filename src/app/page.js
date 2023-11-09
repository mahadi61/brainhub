import Banner from "@/components/banner/Banner";
import Blogs from "@/components/blogs/Blogs";
import Navbar from "@/components/navbar/Navbar";
import Partner from "@/components/partner/Partner";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <section className="sticky top-0 -z-40 w-full ">
      <Banner/>
      </section>
      <section className="z-20 bg-[#0f1115]">
      <Partner/>
      <Blogs/> 
      </section>
    </main>
  )
}
