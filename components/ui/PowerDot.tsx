type PowerDotProps = {
  className?: string;
};

/**
 * The power-on indicator: marks what is current or live, never decoration.
 * @param className - size or spacing overrides
 * @returns a small power-green dot
 */
const PowerDot = ({ className = "" }: PowerDotProps) => (
  <span
    aria-hidden
    className={`bg-live inline-block size-2 shrink-0 rounded-full shadow-[0_0_0_3px_color-mix(in_srgb,var(--live)_20%,transparent)] ${className}`}
  />
);

export default PowerDot;
