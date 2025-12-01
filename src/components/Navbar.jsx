import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#courses", label: "Courses" },
    { href: "#teachers", label: "Teachers" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];
  const liStyle = "hover:text-accent transition cursor-pointer";
  return (
    <nav className="w-full bg-primary text-white py-4 px-6 flex items-center md:justify-around justify-between fixed top-0 left-0 z-50">
      <h1 className="text-accent font-bold text-2xl cursor-pointer flex items-center gap-2">
        <img
          src="/quran.svg"
          alt="Qur’an icon"
          className="w-6 h-6 inline-block filter invert brightness-0"
        />
        AL-Nour
      </h1>

      <ul className="hidden md:flex flex-row gap-8 text-lg">
        {links.map(({ href, label }) => (
          <li key={label} className={liStyle}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>

      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {open && (
        <ul className="absolute top-16 left-0 w-full bg-primary flex flex-col items-center gap-6 py-6 text-lg md:hidden border-t border-white/20">
          {links.map(({ href, label }) => (
            <li key={label} className={liStyle}>
              <a
                href={href}
                onClick={() => setOpen(false)} // closes menu on click
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
