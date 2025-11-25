import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  children: ReactNode;
}

export function Button({ variant = "primary", children, ...props }: ButtonProps) {
  const base =
    "px-5 py-2.5 rounded-lg font-medium transition-all duration-200 active:scale-95";

  const variants = {
    primary: "bg-[var(--primary)] text-white hover:bg-blue-700 shadow-md",
    secondary: "bg-[var(--secondary)] text-white hover:bg-green-700 shadow-md",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 shadow-sm",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}
