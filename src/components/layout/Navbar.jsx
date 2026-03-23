import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/techno_logo.png";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Gallery", path: "/cases" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-lg">
      <div className="container-shell flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Technoshine Logo"
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
          />

          <div className="leading-none">
            <p className="text-xl font-extrabold tracking-tight text-slate-900">
              TECHNOSHINE
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.38em] text-slate-500 sm:text-[10px]">
              TRADING INTERNATIONAL
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition hover:text-orange-500 ${
                  isActive ? "text-orange-500" : "text-slate-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Get Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold lg:hidden"
        >
          Menu
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-slate-200 bg-white lg:hidden"
          >
            <div className="container-shell flex flex-col py-4">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="border-b border-slate-100 py-3 text-sm font-semibold text-slate-700 last:border-none"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;