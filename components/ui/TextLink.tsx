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
  /** Size of the outbound arrow; the default suits body text. */
  arrowClassName?: string;
};

// A resting hairline, with a graphite line drawing over it from the left
const underline =
  "bg-[linear-gradient(var(--ink),var(--ink)),linear-gradient(var(--line),var(--line))] bg-[length:0%_1px,100%_1px] bg-[position:0_100%] bg-no-repeat transition-[background-size] duration-500 ease-out-expo group-hover:bg-[length:100%_1px,100%_1px] group-focus-visible:bg-[length:100%_1px,100%_1px]";

/**
 * Inline catalogue link: a hairline underline that a graphite line draws
 * across on hover, and an outbound arrow that lifts away when it leaves the
 * site. Extra props (and the ref) pass through to the underlying link, so
 * it can be a trigger for popovers.
 * @param href - destination
 * @param external - opens in a new tab and shows the outbound arrow
 * @returns the styled link
 */
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
