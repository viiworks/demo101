import Footer from "@/layouts/website/footer/Footer";
import AboutSection from "./sections/AboutSection/AboutSection";
import AmenitiesSection from "./sections/AmenitiesSection/AmenitiesSection";
import Banner from "./sections/Banner/Banner";
import BlogsSection from "./sections/Blogs/BlogsSection";
import RoomsSection from "./sections/RoomsSection/RoomsSection";


const Homepage = () => {
  return (
    <>
      <Banner />
      <AboutSection />
      <RoomsSection />
      <AmenitiesSection />
      <BlogsSection />
      <Footer />
    </>
  );
};

export default Homepage;
