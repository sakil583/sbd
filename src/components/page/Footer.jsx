import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white  w-full mx-auto ">
      <div className="w-full flex flex-wrap mx-auto pt-2 md:ml-3 lg:flex lg:justify-around ">

        {/* About */}
        <div className="mb-6 ">
          <h2 className="text-lg font-semibold mb-1">About Us</h2>
          <p className="text-sm">We are committed to delivering the best products at the best prices.</p>
        </div>

        {/* Quick Links */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-1">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/home" className="hover:text-blue-400">Home</NavLink></li>
            <li><NavLink to="/service" className="hover:text-blue-400">Service</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-400">Contact</NavLink></li>
            <li><NavLink to="/login" className="hover:text-blue-400">Login</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-1">Contact</h2>
          <p className="text-sm">Dhundiya, Gobindogong, Gaibandha</p>
          <p className="text-sm">Mobile: 01983996658</p>
          <a href="mailto:sarkarsakil389@gmail.com" className="text-sm cursor-pointer hover:underline hover:text-blue-400">Email: sarkarsakil389@gmail.com</a>
        </div>

        {/* Social Media */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-1">Follow Us</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Instagram</a></li>
          </ul>
        </div>

        {/* Privacy Policy */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold ">Privacy & Terms</h2>
          <ul className="space-y-2 text-sm">
            <li><NavLink to="/privacy"  className="hover:text-blue-400 transition-colors duration-200">Privacy & Policy</NavLink></li>
            <li><NavLink to="/terms"  className="hover:text-blue-400 transition-colors duration-200">Terms & Conditions</NavLink></li>
          </ul>
        </div>

      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        © 2025 YourCompany. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
