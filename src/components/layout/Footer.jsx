import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 text-slate-300">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-xl font-bold text-white">TECHNOSHINE</h3>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Reliable industrial product supply with modern production standards, export-ready service,
            and strong project support.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/cases">Cases</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Products</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm">
            <p>W Beam Guardrail</p>
            <p>Thrie Beam Guardrail</p>
            <p>Steel Posts</p>
            <p>Accessories</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p>Email: sales@technoshine.com</p>
            <p>Phone: +63 900 000 0000</p>
            <p>Address: Quezon City, Philippines</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5 text-center text-sm text-slate-500">
        © 2026 Technoshine. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;