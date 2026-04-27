import { Link } from "@tanstack/react-router";
import logoSrc from "@/assets/rajmi-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`flex items-center gap-3 group ${className}`}
      aria-label="Rajmi Geo Exploration Pvt. Ltd. — home"
    >
      <img
        src={logoSrc}
        alt="Rajmi Geo Exploration Pvt. Ltd."
        width={180}
        height={48}
        className="h-9 sm:h-10 w-auto block"
      />
    </Link>
  );
}
