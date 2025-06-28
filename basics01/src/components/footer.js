import React from "react";
import { LOGO_URL } from "../utils/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10 text-center">
        {/* Logo and Title */}
        <div className="mb-6 flex flex-col items-center">
          <img
            src={LOGO_URL}
            alt="Meet N Eat Logo"
            className="w-20 h-20 object-cover rounded-2xl shadow-md mb-2"
          />
          <h4 className="text-lg font-semibold">Meet N Eat</h4>
        </div>

        {/* Footer Links */}
        <div className="flex justify-center gap-6 flex-wrap mb-6 text-sm font-medium">
          <a
            href="/privacy-policy"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="/about"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            About Us
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-sm text-gray-600 mb-6">
          <p>1234 Banglore St, Banglore, KA, 560001</p>
          <p>
            Contact:{" "}
            <a
              href="mailto:support@meetneat.com"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              support@meetneat.com
            </a>
          </p>
        </div>

        {/* Footer Bottom Text */}
        <p className="text-xs text-gray-500">
          &copy; {currentYear} Meet N Eat. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
// This Footer component is designed to be responsive and visually appealing.
// It includes a logo, title, footer links, contact information, and a copyright notice.  
// The styles are applied using Tailwind CSS classes for a clean and modern look.
