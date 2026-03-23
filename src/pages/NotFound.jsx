import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="grid min-h-[70vh] place-items-center px-4 text-center">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">404 Error</p>
        <h1 className="mt-4 text-5xl font-extrabold text-slate-900">Page not found</h1>
        <p className="mt-4 text-slate-600">The page you are looking for does not exist or may have been moved.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;