import Footer from "@/Components/components/layout/Footer";
import { Navbar } from "@/Components/components/layout/Navbar";
import { Products } from "@/Components/pages/Products";

const Page = () => {
    return <div><Navbar /> <main className="pt-10"><Products /></main><Footer /></div>
}

export default Page;
