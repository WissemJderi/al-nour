const Footer = () => {
  return (
    <footer className="bg-primary text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            AL-NOUR Quran Institute
          </h3>
          <p className="text-sm leading-relaxed">
            Dedicated to making Qur’an learning accessible to everyone with
            excellence, sincerity, and authentic Islamic methodology.
          </p>
        </div>

        <nav>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "#about", label: "About Us" },
              { href: "#teachers", label: "Our Teachers" },
              { href: "#pricing", label: "Pricing" },
              { href: "#contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={label}>
                <a
                  href={href}
                  className="hover:text-hover-accent transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic">
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:info@alnourquran.com"
                className="hover:text-hover-accent transition-colors"
              >
                info@alnourquran.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a
                href="tel:+123456789"
                className="hover:text-hover-accent transition-colors"
              >
                +1 234 567 89
              </a>
            </li>
            <li>Location: Online Worldwide</li>
          </ul>
        </address>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} AL-NOUR Quran Institute. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
