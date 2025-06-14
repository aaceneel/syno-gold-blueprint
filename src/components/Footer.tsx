
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold gradient-text mb-2">SYNO GOLD</div>
            <p className="text-sm text-gray-600">
              © 2025 Syno Gold. All rights reserved.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex items-center space-x-2 text-gray-600">
            <Mail size={16} />
            <span className="text-sm">hello@synogold.com</span>
          </div>

          {/* Links */}
          <div className="flex space-x-6 text-sm text-gray-600">
            <Link to="/privacy-policy" className="hover:text-syno-green-600 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="hover:text-syno-green-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
