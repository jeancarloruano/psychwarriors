import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const variants = {
  primary: "border border-earth bg-earth hover:bg-charcoal text-white",
  secondary: "border border-gold bg-gold hover:bg-sunrise text-earth ",
  outline: "border border-earth/40 text-earth hover:bg-earth hover:text-cream ",
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const base = "inline-flex items-center justify-center px-5 py-2.5 font-medium transition-colors";

  if (href) {
    return (
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
