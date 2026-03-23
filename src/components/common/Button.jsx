import { Link } from "react-router-dom";

function Button({ children, to = "/contact", variant = "primary", className = "" }) {
  const styles =
    variant === "outline"
      ? "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100"
      : "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/20";

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}

export default Button;