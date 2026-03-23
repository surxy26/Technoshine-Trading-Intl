import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Cases", path: "/cases" },
  { name: "News", path: "/news" },
  { name: "Technical", path: "/technical-support" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-lg">
      <div className="container-shell flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-500 font-bold text-white shadow-lg shadow-orange-500/20">
            TS
          </div>
          <div>
            <p className="text-lg font-extrabold tracking-tight">TECHNOSHINE</p>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
              Industrial Systems
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