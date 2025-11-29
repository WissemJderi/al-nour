import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const liStyle = "hover:text-accent transition cursor-pointer";
  return (
    <nav className="w-full bg-primary text-white py-4 px-6 flex items-center md:justify-around justify-between fixed top-0 left-0 z-50">
      <h1 className="text-accent font-bold text-2xl cursor-pointer">AL-Nour</h1>

      <ul className="hidden md:flex flex-row gap-8 text-lg">
        <li className={`${liStyle}`}>Home</li>
        <li className={`${liStyle}`}>About Us</li>
        <li className={`${liStyle}`}>Courses</li>
        <li className={`${liStyle}`}>Teachers</li>
        <li className={`${liStyle}`}>Pricing</li>
        <li className={`${liStyle}`}>Contact</li>
      </ul>

      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

      {open && (
        <ul className="absolute top-16 left-0 w-full bg-primary flex flex-col items-center gap-6 py-6 text-lg md:hidden border-t border-white/20">
          <li className="hover:text-accent transition">Home</li>
          <li className="hover:text-accent transition">About Us</li>
          <li className="hover:text-accent transition">Courses</li>
          <li className="hover:text-accent transition">Teachers</li>
          <li className="hover:text-accent transition">Pricing</li>
          <li className="hover:text-accent transition">Contact</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
