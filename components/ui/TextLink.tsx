import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

type TextLinkProps = Omit<
  React.ComponentProps<typeof Link>,
  "href" | "children" | "className"
> & {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
  arrowClassName?: string;
};

const underline =
  "bg-[linear-gradient(var(--ink),var(--ink)),linear-gradient(var(--line),var(--line))] bg-[length:0%_1px,100%_1px] bg-[position:0_100%] bg-no-repeat transition-[background-size] duration-500 ease-out-expo group-hover:bg-[length:100%_1px,100%_1px] group-focus-visible:bg-[length:100%_1px,100%_1px]";

const TextLink = ({
  href,
  children,
  external = false,
  className = "",
  arrowClassName = "size-4",
  ...props
}: TextLinkProps) => (
  <Link
    href={href}
    className={`group text-ink inline-flex items-center gap-1 font-medium ${className}`}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    {...props}
  >
    <span className={`pb-0.5 ${underline}`}>{children}</span>
    {external && (
      <FiArrowUpRight
        aria-hidden
        className={`ease-out-expo ${arrowClassName} transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5`}
      />
    )}
  </Link>
);

export default TextLink;
