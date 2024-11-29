import { ProductDescription } from "../pages/ProductDescription";
import { FeaturedCakes } from "./home/FeaturedCakes";
import { Hero } from "./home/Hero";
import { Testimonials } from "./home/Testimonials";
import Footer from "./layout/Footer";
import { Navbar } from "./layout/Navbar";


function Main() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <FeaturedCakes title="Featured Cakes" />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default Main;