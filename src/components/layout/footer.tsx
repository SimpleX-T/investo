import { motion } from "motion/react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-text-dark py-10 px-6 md:px-16 lg:px-32 font-manrope bg-primary-100">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src="/footer_logo.svg" alt="Investo Logo" className="h-8 mb-4" />
          <p className="mb-4 max-w-sm">
            Join our newsletter to stay up to date on features and releases.
          </p>
          <form className="flex max-w-md relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 pl-14 py-3 border border-gray-300 rounded-full focus:outline-none"
            />

            <button
              type="button"
              className="p-3 bg-[#F6F7F9] text-[#595959] rounded-full absolute left-1.5 top-1/2 transform -translate-y-1/2"
            >
              <FaEnvelope className="w-4 h-4" />
            </button>

            <button
              type="submit"
              className="px-6 py-2 bg-black text-white rounded-full absolute hover:bg-gray-800 transition right-1.5 top-1/2 transform -translate-y-1/2"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2">
            By subscribing you agree to with our{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>
            .
          </p>
        </motion.div>

        {/* Middle - Links */}
        <motion.div
          className="flex-[0.7] grid grid-cols-2 sm:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Products</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#">AI Assistant</a>
              </li>
              <li>
                <a href="#">Mobile App</a>
              </li>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">Credit Card</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* Bottom - Copyright & Socials */}
      <motion.div
        className="mt-10 border-t border-gray-300 pt-6 flex flex-col sm:flex-row justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-sm text-gray-600">
          Copyright © 2025 Inveto. All Rights Reserved
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#">
            <FaFacebookF />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
