import React from "react";
import type { LucideIcon } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
}

const Button = ({
  children,
  className = "",
  icon: Icon,
  iconPosition = "left",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-full bg-[#C6DEFE]/80 text-[var(--foreground)] shadow transition-all hover:bg-[#C6DEFE] active:bg-[#A4C8F0] font-sans font-medium flex items-center gap-2 ${className}`}
      {...props}>
      {Icon && iconPosition === "left" && (
        <Icon size={20} className="shrink-0" />
      )}
      <span>{children}</span>
      {Icon && iconPosition === "right" && (
        <Icon size={20} className="shrink-0" />
      )}
    </button>
  );
};

export default Button;
