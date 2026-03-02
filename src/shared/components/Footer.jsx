import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight">MyStore</h2>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
              A curated selection of products designed with simplicity and
              everyday use in mind.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-medium mb-4">Stay Updated</h3>

            <div className="flex border border-gray-300 rounded-full overflow-hidden max-w-sm">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-2 text-sm flex-1 outline-none"
              />
              <button className="px-5 text-sm bg-black text-white hover:opacity-80 transition">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-gray-400 mt-3">
              No spam. Just updates when it matters.
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-sm text-gray-400">
          © {new Date().getFullYear()} MyStore. Built with attention to detail.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
