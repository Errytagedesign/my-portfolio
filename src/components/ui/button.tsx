import Link from "next/link";
import React from "react";

type ButtonProps = {
  link?: boolean;
  anchor?: boolean;
  type?: "button" | "submit" | "reset" | "link";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button: React.FC<ButtonProps> = ({
  type = "button",
  href,
  onClick,
  children,
  className,
  link,
  loading,
  disabled,
  anchor,
  ...rest
}) => {
  if (link) {
    return (
      <Link
        href={href as string}
        className={` ${className} btn flex items-center justify-center gap-2`}
      >
        {children}
      </Link>
    );
  }
  if (anchor) {
    return (
      <a
        href={href as string}
        className={` ${className} btn flex items-center justify-center gap-2`}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={` ${className} btn flex items-center justify-center gap-2`}
      disabled={loading || disabled}
    >
      {children}
    </button>
  );
};

export default Button;
