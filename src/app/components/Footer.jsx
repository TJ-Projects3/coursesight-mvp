export default function Footer() {
    return (
            <footer className="bg-gray-900 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
            <div>
                <h3 className="text-lg font-semibold mb-4">Coursesight</h3>
                <p>Empowering students to succeed in their academic journey.</p>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#about" className="hover:underline">About Us</a></li>
                <li><a href="#resources" className="hover:underline">Resources</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Course Reviews</a></li>
                <li><a href="#" className="hover:underline">Study Materials</a></li>
                <li><a href="#" className="hover:underline">Career Advice</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-semibold mb-4">Connect</h3>
                <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Facebook</a></li>
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
                </ul>
            </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; {new Date().getFullYear()} Coursesight. All rights reserved.</p>
            </div>
        </footer>
    )
}