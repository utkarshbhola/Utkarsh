import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="bg-white w-full border-t border-gray-300 mt-20">
        {/* Contact section with social icons - full width with centered content */}
        <div className="w-full bg-gray-50 py-6">
          <div className="max-w-screen-xl mx-auto px-6 flex justify-center space-x-8">
            <a
              href="mailto:utkarsh.bhola31@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="text-gray-700 hover:text-red-600 transition text-3xl"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/utkarshbhola"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-700 hover:text-black transition text-3xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/utkarshbhola"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-700 hover:text-blue-600 transition text-3xl"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="max-w-screen-xl mx-auto px-6">
          <hr className="border-gray-300" />
        </div>

        {/* Copyright */}
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <p className="text-gray-500 text-center text-sm select-none">
            © Utkarsh Bhola 2025 — All rights reserved
          </p>
        </div>
      </div>
    </footer>
    
  );
}
