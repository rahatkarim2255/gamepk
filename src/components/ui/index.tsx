import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "main";
}

export function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  );
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
}

const buttonVariants = {
  primary:
    "bg-red-600 text-white hover:bg-red-500 shadow-lg shadow-red-600/25",
  secondary:
    "bg-zinc-800 text-white hover:bg-zinc-700 border border-zinc-700",
  outline:
    "border border-red-600/50 text-red-400 hover:bg-red-600/10",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const classes = `inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 ${buttonVariants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "accent" | "zinc";
}

const badgeVariants = {
  default: "bg-zinc-800 text-zinc-300 border-zinc-700",
  accent: "bg-red-600/10 text-red-400 border-red-600/30",
  zinc: "bg-zinc-800/80 text-zinc-400 border-zinc-700/50",
};

export function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${badgeVariants[variant]}`}
    >
      {children}
    </span>
  );
}

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  as?: "h1" | "h2" | "h3";
  id?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  as: Tag = "h2",
  id,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <Tag
        id={id}
        className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
      >
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-lg text-zinc-400 sm:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface ImagePlaceholderProps {
  alt: string;
  src?: string;
  aspectRatio?: "video" | "square" | "wide" | "portrait";
  className?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain";
}

const aspectClasses = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
  portrait: "aspect-[9/16]",
};

export function ImagePlaceholder({
  alt,
  src,
  aspectRatio = "video",
  className = "",
  priority = false,
  objectFit = "cover",
}: ImagePlaceholderProps) {
  if (!src) return null;

  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900 ${aspectClasses[aspectRatio]} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        className={objectFit === "contain" ? "object-contain" : "object-cover"}
      />
    </div>
  );
}

interface CardProps {
  children: ReactNode;
  href?: string;
  className?: string;
  padded?: boolean;
}

export function Card({
  children,
  href,
  className = "",
  padded = true,
}: CardProps) {
  const cardClasses = `group rounded-xl border border-zinc-800 bg-zinc-900/50 transition-all duration-200 hover:border-red-600/30 hover:bg-zinc-900 ${
    padded ? "p-6" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${cardClasses}`}>
        {children}
      </Link>
    );
  }

  return <div className={cardClasses}>{children}</div>;
}
