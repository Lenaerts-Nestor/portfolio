// src/components/layout/Footer.tsx
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About</h3>
            <p className="text-gray-400 leading-relaxed">
              Documenting my internship journey at [Company Name] as part of the
              AP Hogeschool Programming program.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/documentation"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/nestor-lenaerts-4652381b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://github.com/Lenaerts-Nestor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} Portfolio WPL. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
