
const Footer = () => {

    return (<footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-lg font-semibold mb-4">Sweet Delights</h3>
                    <p className="text-gray-400">
                        Crafting moments of joy through delicious, handmade cakes since 2010.
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                    <p className="text-gray-400">
                        123 Bakery Street<br />
                        New York, NY 10001<br />
                        (555) 123-4567<br />
                        info@sweetdelights.com
                    </p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-4">Hours</h3>
                    <p className="text-gray-400">
                        Monday - Friday: 9am - 6pm<br />
                        Saturday: 10am - 4pm<br />
                        Sunday: Closed
                    </p>
                </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>&copy; 2024 Sweet Delights. All rights reserved.</p>
            </div>
        </div>
    </footer>)

}
export default Footer;