import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
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
        <li className={liStyle}>
          <a href="#">Home</a>
        </li>
        <li className={liStyle}>
          <a href="#about">About Us</a>
        </li>
        <li className={liStyle}>
          <a href="#courses">Courses</a>
        </li>
        <li className={liStyle}>
          <a href="#teachers">Teachers</a>
        </li>
        <li className={liStyle}>
          <a href="#pricing">Pricing</a>
        </li>
        <li className={liStyle}>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {open && (
        <ul className="absolute top-16 left-0 w-full bg-primary flex flex-col items-center gap-6 py-6 text-lg md:hidden border-t border-white/20">
          <li className="hover:text-accent transition">
            <a
              onClick={() => {
                setOpen(!open);
              }}
              href="#"
            >
              Home
            </a>
          </li>
          <li className="hover:text-accent transition">
            <a
              onClick={() => {
                setOpen(!open);
              }}
              href="#about"
            >
              About Us
            </a>
          </li>
          <li className="hover:text-accent transition">
            <a
              onClick={() => {
                setOpen(!open);
              }}
              href="#courses"
            >
              Courses
            </a>
          </li>
          <li className="hover:text-accent transition">
            <a
              onClick={() => {
                setOpen(!open);
              }}
              href="#teachers"
            >
              Teachers
            </a>
          </li>
          <li className="hover:text-accent transition">
            <a
              onClick={() => {
                setOpen(!open);
              }}
              href="#pricing"
            >
              Pricing
            </a>
          </li>
          <li className="hover:text-accent transition">
            <a
              onClick={() => {
                setOpen(!open);
              }}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
